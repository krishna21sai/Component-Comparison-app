'use client';

import React from 'react';
import { useNavigation, ViewType } from '@/context/NavigationContext';

const Icons = {
    Spark: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
    ),
    Card: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
    ),
    Button: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
    ),
    Input: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /><path d="M19 12l-7 7-7-7" /></svg>
    ),
    Avatar: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
    ),
    Switch: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="6" /><circle cx="14" cy="12" r="3" /></svg>
    ),
    Alert: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
    ),
    Checkbox: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="m9 12 2 2 4-4" /></svg>
    ),
    ArrowRight: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
};

const components: { title: string; id: ViewType; description: string; icon: React.ReactNode; color: string }[] = [
    {
        title: 'Card',
        id: 'card',
        description: 'Container for content and actions.',
        icon: <Icons.Card />,
        color: '#3b82f6'
    },
    {
        title: 'Button',
        id: 'button',
        description: 'Interactive elements with variants.',
        icon: <Icons.Button />,
        color: '#a855f7'
    },
    {
        title: 'Input',
        id: 'input',
        description: 'Text fields for user input.',
        icon: <Icons.Input />,
        color: '#10b981'
    },
    {
        title: 'Avatar',
        id: 'avatar',
        description: 'User identity representations.',
        icon: <Icons.Avatar />,
        color: '#f59e0b'
    },
    {
        title: 'Switch',
        id: 'switch',
        description: 'Toggle control states.',
        icon: <Icons.Switch />,
        color: '#3b82f6'
    },
    {
        title: 'Alert',
        id: 'alert',
        description: 'Notification and feedback.',
        icon: <Icons.Alert />,
        color: '#ef4444'
    },
    {
        title: 'Checkbox',
        id: 'checkbox',
        description: 'Binary selection for options.',
        icon: <Icons.Checkbox />,
        color: '#10b981'
    }
];

export default function Catalog() {
    const { setActiveView } = useNavigation();

    return (
        <div className="cat-container">
            <div className="cat-badge">
                <Icons.Spark />
                Component Library
            </div>

            <h1 className="cat-heroHeading">
                Explore <span className="cat-gradientText">Components</span>
            </h1>

            <p className="cat-description">
                A curated collection of UI elements implemented across varying design systems.
                Select a component to compare implementations.
            </p>

            <div className="cat-grid">
                {components.map((comp) => (
                    <div
                        key={comp.id}
                        className="cat-card"
                        onClick={() => setActiveView(comp.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="cat-iconBox" style={{ color: comp.color, border: `1px solid ${comp.color}30` }}>
                            {comp.icon}
                        </div>
                        <h3 className="cat-cardTitle">{comp.title}</h3>
                        <p className="cat-cardDescription">{comp.description}</p>
                        <div className="cat-explore">
                            EXPLORE <Icons.ArrowRight />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
