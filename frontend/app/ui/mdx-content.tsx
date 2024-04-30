'use client';
import {
  MDXRemote,
  MDXRemoteSerializeResult,
} from "next-mdx-remote";

type MDXContentProps = {
  source: MDXRemoteSerializeResult,
  data: Record<string, unknown>
};

const Components = {
};

export function MDXContent({ source, data }: MDXContentProps) {
  return <MDXRemote {...source} scope={data} components={Components} />;
}