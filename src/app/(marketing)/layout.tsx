import React from 'react';
import { Footer } from "@/components";
import { MarketingNavbar } from "@/components/navigation/marketing-navbar";

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            <MarketingNavbar />
            <main className="mt-20 mx-auto w-full z-0 relative">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout
