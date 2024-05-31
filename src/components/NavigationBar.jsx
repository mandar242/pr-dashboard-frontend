import React, { useState } from 'react';
import { Cloud, CloudCog, ServerCog, Container } from 'lucide-react';

const navLinks = [
    { name: 'amazon.aws', icon: Cloud },
    { name: 'community.aws', icon: CloudCog },
    { name: 'cloud.terraform', icon: ServerCog },
    { name: 'kubernetes.core', icon: Container },
];

function NavigationBar({ setActiveCollection }) {
    const [activeNavIndex, setActiveNavIndex] = useState(0);

    const handleNavLinkClick = (item, index) => {
        setActiveNavIndex(index);
        setActiveCollection(item.name);
    };

    return (
        <div className='px-10 py-12 flex flex-col border border-r-4 w-1/6 h-screen bg-[#f0eeeb]'>
            <div className='mt-10 flex flex-col space-y-8'>
                {navLinks.map((item, index) => (
                    <div
                        key={index}
                        className={
                            'flex space-x-3 p-2 rounded' +
                            (activeNavIndex === index ? ' bg-[#7deb78] text-black font-semibold' : ' ')
                        }
                        onClick={() => handleNavLinkClick(item, index)}>
                        <item.icon />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavigationBar;
