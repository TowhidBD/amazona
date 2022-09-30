import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { LayoutProps } from '../../types'

/**
 * Layout Component
 * 
 * @param children 
 * @returns JSX.Element
 */



const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
                <meta name="description" content="Ecommerce Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col justify-between">
                <header>
                    <nav className="flex h-12 items-center px-4 justify-between shadow-md">
                        <Link href="/">
                            <a className="text-lg font-bold" href="">Amazona</a>
                        </Link>
                        <div>
                            <Link href="/cart">
                                <a className="p-2" href="">Cart</a>
                            </Link>
                            <Link href="/Login">
                                <a className="p-2" href="">Login</a>
                            </Link>
                        </div>
                    </nav>
                </header>
                <main className="container m-auto mt-4 px-4">
                    {children}
                </main>
                <footer className="flex h-10 justify-center items-center shadow-inner">
                    <p>Copyright &copy; 2022 Amazona </p>
                </footer>
            </div>
        </>

    )
}

export default Layout