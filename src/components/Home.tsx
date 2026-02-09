'use client';

import React from 'react';
import { useNavigation } from '@/context/NavigationContext';

const Icons = {
    // Library Icons
    Shadcn: () => (
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M208 128a80 80 0 10-160 0 80 80 0 00160 0z" /><path d="M128 48v160" /><path d="M48 128h160" /></svg>
    ),
    Mui: () => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
    ),
    Antd: () => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 004 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
    ),
    Chakra: () => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-2 10h8L7 22l2-10H1L13 2z" /></svg>
    ),
    ArrowRight: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
};

const libraries = [
    { name: 'Shadcn UI', icon: <Icons.Shadcn />, color: 'var(--foreground)' },
    { name: 'Material UI', icon: <Icons.Mui />, color: '#007FFF' },
    { name: 'Ant Design', icon: <Icons.Antd />, color: '#ff4d4f' },
    { name: 'Chakra UI', icon: <Icons.Chakra />, color: '#319795' },
];

export default function Home() {
    const { setActiveView } = useNavigation();

    const handleStartComparing = () => {
        setActiveView('catalog');
    };

    return (
        <div className="hp-container">
            <header className="hp-hero">
                <h1 className="hp-title">
                    Welcome to <span className="hp-gradientText">Component Comparison App</span>
                </h1>
                <p className="hp-description">
                    The ultimate environment for exploring, comparing, and mastering modern UI components.
                </p>
                <button className="hp-ctaButton" onClick={handleStartComparing}>
                    Start Comparing <Icons.ArrowRight />
                </button>
            </header>

            {/* Section 1: Libraries */}
            <section className="hp-sectionHeader">
                <h2 className="hp-sectionTitle">Component Libraries Used</h2>
                <div className="hp-divider"></div>
                <p className="hp-description" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Comparing the best React UI frameworks.
                </p>

                <div className="hp-libGrid">
                    {libraries.map((lib) => (
                        <div key={lib.name} className="hp-libCard">
                            <div className="hp-libIconBox" style={{ color: lib.color, border: `1px solid ${lib.color}40` }}>
                                {lib.icon}
                            </div>
                            <h3 className="hp-libTitle">{lib.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
