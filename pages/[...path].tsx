const Parent = () => {
    return <div>This is the parent</div>
}

export const getStaticProps = () => {
    return {
        props: {},
    }
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export default Parent