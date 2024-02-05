import React from "react";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Projects',
}
export default function ContentLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    )
}