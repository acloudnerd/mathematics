import createMDX from '@next/mdx'

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: ['remark-math'],
        rehypePlugins: ['rehype-katex'],
    },
})

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    reactCompiler: true,
}

export default withMDX(nextConfig)