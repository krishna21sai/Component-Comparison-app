'use client';

import React, { useState } from 'react';
import { Search, Sparkles, Eye, Code, Copy, Check } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import SandboxPreview from './SandboxPreview';

type LibraryType = 'shadcn' | 'mui' | 'antd' | 'chakra';

interface GeneratedCode {
    shadcn?: string;
    mui?: string;
    antd?: string;
    chakra?: string;
}

interface LoadingStates {
    shadcn: boolean;
    mui: boolean;
    antd: boolean;
    chakra: boolean;
}

export default function AIGenerator() {
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);
    const [viewMode, setViewMode] = useState<'preview' | 'code'>('code');
    const [generatedCode, setGeneratedCode] = useState<GeneratedCode>({});
    const [loadingStates, setLoadingStates] = useState<LoadingStates>({
        shadcn: false,
        mui: false,
        antd: false,
        chakra: false
    });
    const [errors, setErrors] = useState<Partial<Record<LibraryType, string>>>({});
    const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
    const { visibleLibraries } = useNavigation();

    const handleCopy = (code: string, library: string) => {
        navigator.clipboard.writeText(code);
        setCopiedStates(prev => ({ ...prev, [library]: true }));
        setTimeout(() => {
            setCopiedStates(prev => ({ ...prev, [library]: false }));
        }, 2000);
    };

    const generateCodeForLibrary = async (library: LibraryType) => {
        setLoadingStates(prev => ({ ...prev, [library]: true }));
        setErrors(prev => ({ ...prev, [library]: undefined }));

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt,
                    library,
                    currentCode: generatedCode[library] // Send existing code for iteration
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || data.details || 'Failed to generate code');
            }

            setGeneratedCode(prev => ({ ...prev, [library]: data.code }));
        } catch (error) {
            console.error(`Error generating ${library} code:`, error);
            const errorMessage = error instanceof Error ? error.message : 'Generation failed';
            setErrors(prev => ({
                ...prev,
                [library]: errorMessage
            }));
        } finally {
            setLoadingStates(prev => ({ ...prev, [library]: false }));
        }
    };

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        setIsGenerating(true);
        setHasGenerated(true);
        setGeneratedCode({});
        setErrors({});

        // Generate code for all visible libraries in parallel
        const libraries: LibraryType[] = ['shadcn', 'mui', 'antd', 'chakra'];
        const visibleLibs = libraries.filter(lib => visibleLibraries.includes(lib));

        await Promise.all(visibleLibs.map(lib => generateCodeForLibrary(lib)));

        setIsGenerating(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleGenerate();
        }
    };

    const renderLibraryBox = (library: LibraryType, label: string, tagClass: string) => {
        if (!visibleLibraries.includes(library)) return null;

        const isLoading = loadingStates[library];
        const code = generatedCode[library];
        const error = errors[library];

        return (
            <div className="comp-section">
                <div className={`comp-libraryTag ${tagClass}`}>
                    <Sparkles size={14} />
                    {label}
                </div>
                <div className="ai-gen-preview-area">
                    {isLoading ? (
                        <div className="ai-gen-waiting">
                            <Sparkles size={48} className="ai-gen-waiting-icon spinning" />
                            <p className="ai-gen-waiting-text">Generating {label} code...</p>
                        </div>
                    ) : error ? (
                        <div className="ai-gen-error">
                            <p className="ai-gen-error-text">❌ {error}</p>
                        </div>
                    ) : code ? (
                        <div style={{ width: '100%', height: '100%' }}>
                            {/* Code View */}
                            <div
                                className="ai-gen-code-wrapper"
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    display: viewMode === 'code' ? 'block' : 'none'
                                }}
                            >
                                <button
                                    className="ai-gen-copy-btn"
                                    onClick={() => handleCopy(code, library)}
                                    title="Copy code"
                                >
                                    {copiedStates[library] ? <Check size={16} /> : <Copy size={16} />}
                                    {copiedStates[library] ? "Copied!" : "Copy"}
                                </button>
                                <div className="ai-gen-code-display">
                                    <pre className="ai-gen-code-pre">
                                        <code className="ai-gen-code">{code}</code>
                                    </pre>
                                </div>
                            </div>

                            {/* Preview View */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: viewMode === 'preview' ? 'block' : 'none'
                            }}>
                                <SandboxPreview code={code} library={library} />
                            </div>
                        </div>
                    ) : (
                        <div className="ai-gen-waiting">
                            <Sparkles size={48} className="ai-gen-waiting-icon" />
                            <p className="ai-gen-waiting-text">Waiting for prompt...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="comp-container">
            {/* Header with Search Bar */}
            <div className="ai-gen-header">
                <div className="ai-gen-search-wrapper">
                    <Search className="ai-gen-search-icon" size={20} />
                    <input
                        type="text"
                        className="ai-gen-search-input"
                        placeholder='Describe a component (e.g., "A modern pricing card with glassmorphism")...'
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="ai-gen-button"
                        onClick={handleGenerate}
                        disabled={!prompt.trim() || isGenerating}
                    >
                        {isGenerating ? (
                            <>
                                <Sparkles size={18} className="ai-gen-button-icon spinning" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Sparkles size={18} className="ai-gen-button-icon" />
                                Generate All
                            </>
                        )}
                    </button>
                </div>

                {/* View Mode Toggle */}
                {hasGenerated && (
                    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 mt-4">
                        <button
                            onClick={() => setViewMode('preview')}
                            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all ${viewMode === 'preview' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                            title="Preview"
                        >
                            <Eye size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode('code')}
                            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all ${viewMode === 'code' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                            title="Code"
                        >
                            <Code size={20} />
                        </button>
                    </div>
                )}
            </div>

            {/* Generated Components Grid */}
            {hasGenerated ? (
                <div className="comp-grid">
                    {renderLibraryBox('shadcn', 'SHADCN UI', 'tag-shadcn')}
                    {renderLibraryBox('mui', 'MATERIAL UI', 'tag-mui')}
                    {renderLibraryBox('antd', 'ANT DESIGN', 'tag-antd')}
                    {renderLibraryBox('chakra', 'CHAKRA UI', 'tag-chakra')}
                </div>
            ) : (
                <div className="ai-gen-empty-state">
                    <Sparkles size={64} className="ai-gen-empty-icon" />
                    <h2 className="ai-gen-empty-title">AI Component Generator</h2>
                    <p className="ai-gen-empty-description">
                        Describe the component you want to create, and our AI will generate it across all UI libraries.
                    </p>
                    <div className="ai-gen-examples">
                        <p className="ai-gen-examples-title">Try examples:</p>
                        <button
                            className="ai-gen-example-chip"
                            onClick={() => setPrompt('A modern pricing card with glassmorphism')}
                        >
                            Pricing card with glassmorphism
                        </button>
                        <button
                            className="ai-gen-example-chip"
                            onClick={() => setPrompt('A user profile card with avatar and social stats')}
                        >
                            User profile card
                        </button>
                        <button
                            className="ai-gen-example-chip"
                            onClick={() => setPrompt('A product card with image, title, and CTA button')}
                        >
                            Product card
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
