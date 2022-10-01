import Link from "next/link";

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <Link {...props}></Link>;
  }

  return <Link isExternal {...props} />;
};


export default CustomLink;
