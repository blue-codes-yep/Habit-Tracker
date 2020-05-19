import Head from 'next/head'
import Nav from './Nav'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Nav />
            <main> {children}</main>
        </div>
    )
}

export default Layout