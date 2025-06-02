import Sidebar from "@/components/blog-detail/Sidebar";
import React from "react";

interface DetailProps {
    children: React.ReactNode
}

const DetailLayout:React.FC<DetailProps> = ({children}) => {
    return <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
            {/* <!-- Blog Post Content --> */}
            {children}
            {/* <!-- Sidebar --> */}
            <Sidebar></Sidebar>
        </div>
    </main>
}

export default DetailLayout;