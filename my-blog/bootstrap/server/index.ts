import { GetServerSideProps } from 'next'
import { getModuleData } from './get-module-data'
import { getModuleHandler } from './get-module-handler'

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    // Get module data
    const moduleData = await getModuleData(context)

    // Call module server function
    const handler = await getModuleHandler(moduleData.moduleType)

    const props = handler ? await handler(moduleData)(context) : {}

    // Redirect
    if (props?.redirect) throw { redirect: props.redirect }

    // Not found
    if (props?.notFound) throw { notFound: true }

    // This value is considered fresh for ten seconds (s-maxage=10).
    // If a request is repeated within the next 10 seconds, the previously
    // cached value will still be fresh. If the request is repeated before 59 seconds,
    // the cached value will be stale but still render (stale-while-revalidate=59).
    //
    // In the background, a revalidation request will be made to populate the cache
    // with a fresh value. If you refresh the page, you will see the new value.
    context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

    // Everything okay, let's go
    return {
      props: {
        moduleData,
        // Prevent override global data
        [moduleData.moduleType]: props?.props ?? {},
      },
    }
  } catch (e: any) {
    // Redirect
    if (e?.redirect) return { redirect: e.redirect }

    // Other errors just show not found page
    return { notFound: true }
  }
}
