const PATH_HOME = process.env.NEXT_PUBLIC_HOME_PATH ?? ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: PATH_HOME,
  trailingSlash: true,
}

module.exports = nextConfig
