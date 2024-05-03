/** @type {import('next').NextConfig} */
const nextConfig = {
  //https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: "export",
  //bug workaround
  //https://github.com/hashicorp/next-mdx-remote/issues/381#issuecomment-2057520430
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
