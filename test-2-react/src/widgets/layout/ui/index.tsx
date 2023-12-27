import { PropsWithChildren } from 'react'
import { Header } from './header'

export function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <main className="flex flex-col p-4 h-full">{children}</main>
        </>
    )
}
