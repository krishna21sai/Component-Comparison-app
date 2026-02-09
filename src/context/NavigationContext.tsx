'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type ViewType = 'home' | 'catalog' | 'card' | 'button' | 'input' | 'avatar' | 'switch' | 'alert' | 'checkbox' | 'ai-generator';
export type LibraryType = 'shadcn' | 'mui' | 'antd' | 'chakra';

interface NavigationContextType {
    activeView: ViewType;
    setActiveView: (view: ViewType) => void;
    isComponentExpanded: boolean;
    setIsComponentExpanded: (expanded: boolean) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    visibleLibraries: LibraryType[];
    toggleLibrary: (library: LibraryType) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [activeView, setActiveView] = useState<ViewType>('home');
    const [isComponentExpanded, setIsComponentExpanded] = useState(true);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [visibleLibraries, setVisibleLibraries] = useState<LibraryType[]>(['shadcn', 'mui', 'antd', 'chakra']);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const toggleLibrary = (library: LibraryType) => {
        setVisibleLibraries(prev => {
            if (prev.includes(library)) {
                // Don't allow removing the last library
                if (prev.length === 1) return prev;
                return prev.filter(lib => lib !== library);
            } else {
                return [...prev, library];
            }
        });
    };

    useEffect(() => {
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(`${theme}-mode`);
    }, [theme]);

    return (
        <NavigationContext.Provider value={{
            activeView,
            setActiveView,
            isComponentExpanded,
            setIsComponentExpanded,
            theme,
            toggleTheme,
            visibleLibraries,
            toggleLibrary
        }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
}
