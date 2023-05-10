import { FC, useMemo } from 'react'
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPredefinedTemplate,
  SandpackPreview,
  SandpackProvider,
  SandpackProviderProps,
  SandpackFiles,
} from '@codesandbox/sandpack-react'

export interface MarkdownSandboxProps extends SandpackProviderProps {}

export const MarkdownSandbox: FC<MarkdownSandboxProps> = (props) => {
  const { template, options, files } = props

  const filesFormat = useMemo(() => {
    if (!files) {
      return
    }

    const result: SandpackFiles = {}

    for (const key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
        result[key] = files[key].toString().trim()
      }
    }

    return result
  }, [files])

  return (
    <div>
      <SandpackProvider template={template} options={options} files={filesFormat}>
        <SandpackLayout>
          <SandpackCodeEditor showRunButton={false} />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}
