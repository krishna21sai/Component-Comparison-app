'use client';

import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '@/lib/utils';
import { Check, Copy } from 'lucide-react';

interface CodeViewProps {
    component: 'card' | 'button' | 'input' | 'avatar' | 'switch' | 'alert' | 'checkbox';
    library: 'shadcn' | 'mui' | 'antd' | 'chakra';
    isMini?: boolean;
}

export default function CodeView({ component, library, isMini = false }: CodeViewProps) {
    const [code, setCode] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        async function fetchCode() {
            try {
                const res = await fetch(`/api/code?component=${component}`);
                const data = await res.json();
                setCode(data[library] || '');
            } catch (err) {
                console.error('Failed to fetch code:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchCode();
    }, [component, library]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (loading) {
        return (
            <div className={`w-full ${isMini ? 'h-[220px]' : 'h-[400px]'} flex items-center justify-center p-8 animate-pulse text-gray-400 bg-[#0d1117] border border-slate-800 rounded-[2.5rem]`}>
                Loading source code...
            </div>
        );
    }

    const isCard = component === 'card';
    const dimensions = isCard
        ? { width: '500px', height: '450px' }
        : { width: '100%', height: '100%' };

    return (
        <div
            className={cn("relative bg-[#0d1117] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col group mx-auto transition-all duration-300")}
            style={dimensions}
        >
            {/* Mac-style Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50 backdrop-blur text-xs font-mono text-slate-400">
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <span>source.tsx</span>
                </div>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all duration-200"
                >
                    {copied ? (
                        <>
                            <Check className="w-3.5 h-3.5 text-green-400" />
                            <span className="text-green-400">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Syntax Highlighter */}
            <div className="flex-1 overflow-auto" style={{ maxHeight: '100%' }}>
                <SyntaxHighlighter
                    language="typescript"
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        background: '#1e1e1e',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        height: '100%',
                    }}
                    showLineNumbers={true}
                    wrapLines={false}
                    lineNumberStyle={{
                        minWidth: '3em',
                        paddingRight: '1em',
                        color: '#858585',
                        userSelect: 'none',
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
