'use client';

import React, { useState, useEffect } from 'react';
import { useNavigation, ViewType } from '@/context/NavigationContext';

// Simple Icons
const Icons = {
    Home: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sb-icon"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    ),
    Grid: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sb-icon"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
    ),
    Moon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
    ),
    Stars: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sb-icon"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M9 3v4" /><path d="M3 7h6" /></svg>
    )
};

const menuItems = [
    { id: 'card', name: 'Card' },
    { id: 'button', name: 'Button' },
    { id: 'input', name: 'Input' },
    { id: 'avatar', name: 'Avatar' },
    { id: 'switch', name: 'Switch' },
    { id: 'alert', name: 'Alert' },
    { id: 'checkbox', name: 'Checkbox' },
];

export default function Sidebar() {
    const { activeView, setActiveView, isComponentExpanded, setIsComponentExpanded, theme, toggleTheme } = useNavigation();

    // Auto-expand component menu when on catalog or any component page
    useEffect(() => {
        const componentViews: ViewType[] = ['catalog', 'card', 'button', 'input', 'avatar', 'switch', 'alert', 'checkbox'];
        if (componentViews.includes(activeView) && !isComponentExpanded) {
            setIsComponentExpanded(true);
        }
    }, [activeView, isComponentExpanded, setIsComponentExpanded]);

    return (
        <aside className="sb-sidebar">
            <div className="sb-header">
                <div className="sb-logoBadge">
                    <span className="sb-logoBadgeText">UI</span>
                </div>
                <span className="sb-logoText">COMPARE</span>
                <button
                    className="sb-themeToggle"
                    aria-label="Toggle theme"
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                    ) : (
                        <Icons.Moon />
                    )}
                </button>
            </div>

            <button
                className={`sb-aiButton ${activeView === 'ai-generator' ? 'active' : ''}`}
                onClick={() => setActiveView('ai-generator')}
            >
                <Icons.Stars />
                AI Generator
            </button>

            <nav className="sb-nav">
                <div
                    className={`sb-navItem ${activeView === 'home' ? 'sb-navItemActive' : ''}`}
                    onClick={() => setActiveView('home')}
                >
                    <Icons.Home />
                    Home
                </div>

                <div
                    className="sb-navItem"
                    onClick={() => {
                        setActiveView('catalog');
                        setIsComponentExpanded(true);
                    }}
                >
                    <Icons.Grid />
                    Component
                </div>

                <div className={`sb-accordionContent ${isComponentExpanded ? 'sb-accordionContentActive' : ''}`}>
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={`sb-subNavItem ${activeView === item.id ? 'sb-subNavItemActive' : ''}`}
                            onClick={() => setActiveView(item.id as ViewType)}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </nav>
        </aside>
    );
}
