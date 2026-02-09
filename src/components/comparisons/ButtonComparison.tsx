'use client';

import React from 'react';
import { Button as ShadcnButton } from '@/uilibs/shadcn';
import { Button as MuiButton } from '@/uilibs/mui';
import { Button as AntButton } from '@/uilibs/antd';
import { Button as ChakraButton } from '@/uilibs/chakra';
import { Sparkles } from 'lucide-react';
import CodeView from '@/components/CodeView';
import ComparisonHeader from '@/components/ComparisonHeader';
import { useNavigation } from '@/context/NavigationContext';

export default function ButtonComparison() {
    const [viewMode, setViewMode] = React.useState<'preview' | 'code'>('preview');
    const { visibleLibraries } = useNavigation();

    return (
        <div className="comp-container">
            <ComparisonHeader
                title="Button Comparison"
                subtitle="Compare button variants, hover states, and design languages in high-fidelity."
                viewMode={viewMode}
                onViewModeChange={setViewMode}
            />

            <div className="comp-grid">
                {/* Shadcn UI Section */}
                {visibleLibraries.includes('shadcn') && (
                    <div className="comp-section">
                        <div className="comp-libraryTag tag-shadcn">
                            <Sparkles size={14} />
                            SHADCN UI
                        </div>
                        <div className="comp-previewArea-mini">
                            {viewMode === 'preview' ? (
                                <div className="comp-content-wrapper">
                                    <div style={{ transform: 'scale(0.9)' }}>
                                        <ShadcnButton size="sm">Button</ShadcnButton>
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="button" library="shadcn" isMini={true} />
                            )}
                        </div>
                    </div>
                )}

                {/* Material UI Section */}
                {visibleLibraries.includes('mui') && (
                    <div className="comp-section">
                        <div className="comp-libraryTag tag-mui">
                            <Sparkles size={14} />
                            MATERIAL UI
                        </div>
                        <div className="comp-previewArea-mini">
                            {viewMode === 'preview' ? (
                                <div className="comp-content-wrapper">
                                    <div style={{ transform: 'scale(0.9)' }}>
                                        <MuiButton variant="contained" size="small">Button</MuiButton>
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="button" library="mui" isMini={true} />
                            )}
                        </div>
                    </div>
                )}

                {/* Ant Design Section */}
                {visibleLibraries.includes('antd') && (
                    <div className="comp-section">
                        <div className="comp-libraryTag tag-antd">
                            <Sparkles size={14} />
                            ANT DESIGN
                        </div>
                        <div className="comp-previewArea-mini">
                            {viewMode === 'preview' ? (
                                <div className="comp-content-wrapper">
                                    <div style={{ transform: 'scale(0.9)' }}>
                                        <AntButton type="primary" size="small">Button</AntButton>
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="button" library="antd" isMini={true} />
                            )}
                        </div>
                    </div>
                )}

                {/* Chakra UI Section */}
                {visibleLibraries.includes('chakra') && (
                    <div className="comp-section">
                        <div className="comp-libraryTag tag-chakra">
                            <Sparkles size={14} />
                            CHAKRA UI
                        </div>
                        <div className="comp-previewArea-mini">
                            {viewMode === 'preview' ? (
                                <div className="comp-content-wrapper">
                                    <div style={{ transform: 'scale(0.9)' }}>
                                        <ChakraButton size="sm">Button</ChakraButton>
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="button" library="chakra" isMini={true} />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
