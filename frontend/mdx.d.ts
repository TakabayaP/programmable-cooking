declare module "*.mdx" {
    interface Meta {
        title: string;
        updatedAt: string;
    }
    export const meta: Meta
}