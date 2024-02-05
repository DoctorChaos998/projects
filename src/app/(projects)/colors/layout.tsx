import React from "react";
import ColorNotification from "@/components/ColorNotification/ColorNotification";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Colors',
}
export default function ContentLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ColorNotification></ColorNotification>
            {children}
        </>
    )
}