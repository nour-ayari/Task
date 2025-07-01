import { useState } from "react";


export const BodySection = () => {

    return (
        <section className="relative flex flex-col items-center pt-35 pb-8 px-4">
            <div className="space-y-9 font-jost text-center">
            <h1 className="text-5xl font-bold">3D Product Modeling Services</h1>
                <div className="mt-4 text-lg text-center text-gray-800 max-w-2xl mx-0">
                   <p>Our<strong className="font-semibold"> 3D Product Modeling Services</strong> help you build scalable digital twins </p> 
                   <p>for e-commerce, marketing, and virtual photography </p>
                   <p>  — with no physical samples required.</p>
                </div>
            </div>
        </section>
    );
}