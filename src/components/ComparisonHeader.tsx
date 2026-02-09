'use client';

import React from 'react';
import { Eye, Code, Filter } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';

interface ComparisonHeaderProps {
    title: string;
    subtitle: string;
    viewMode: 'preview' | 'code';
    onViewModeChange: (mode: 'preview' | 'code') => void;
}

const libraries = [
    { id: 'shadcn' as const, name: 'Shadcn', color: '#8b5cf6' },
    { id: 'mui' as const, name: 'MUI', color: '#007FFF' },
    { id: 'antd' as const, name: 'AntD', color: '#ff4d4f' },
    { id: 'chakra' as const, name: 'Chakra', color: '#319795' },
];

export default function ComparisonHeader({ title, subtitle, viewMode, onViewModeChange }: ComparisonHeaderProps) {
    const { visibleLibraries, toggleLibrary } = useNavigation();

    return (
        <div className="comp-viewHeader">
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="comp-title">{title}</h1>
                    <p className="comp-subtitle">{subtitle}</p>
                </div>

                {/* Controls in top-right corner */}
                <div className="flex items-center gap-3">
                    {/* Library Filters */}
                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/10">
                        <Filter size={16} className="text-gray-400" />
                        {libraries.map((lib) => (
                            <label
                                key={lib.id}
                                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg cursor-pointer transition-all hover:bg-white/5"
                                style={{
                                    backgroundColor: visibleLibraries.includes(lib.id) ? `${lib.color}20` : 'transparent',
                                    border: `1px solid ${visibleLibraries.includes(lib.id) ? lib.color : 'transparent'}`
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={visibleLibraries.includes(lib.id)}
                                    onChange={() => toggleLibrary(lib.id)}
                                    className="w-3.5 h-3.5 rounded accent-blue-600"
                                />
                                <span className="text-xs font-medium text-gray-300">{lib.name}</span>
                            </label>
                        ))}
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
                        <button
                            onClick={() => onViewModeChange('preview')}
                            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all ${viewMode === 'preview' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                            title="Preview"
                        >
                            <Eye size={20} />
                        </button>
                        <button
                            onClick={() => onViewModeChange('code')}
                            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all ${viewMode === 'code' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                            title="Code"
                        >
                            <Code size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
