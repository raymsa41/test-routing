const Internal = () => {
    return <div>This is the internal page</div>
}

export const getStaticProps = () => {
    return {
        props: {},
    }
}

export const getStaticPaths = () => {
    return {
        paths: [
            { params: { path: ['page1'] } },
            { params: { path: ['page2'] } },
        ],
        fallback: false,
    }
}

export default Internal