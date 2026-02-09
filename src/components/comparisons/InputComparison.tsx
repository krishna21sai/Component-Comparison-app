'use client';

import React from 'react';
import { Input as ShadcnInput } from '@/uilibs/shadcn';
import { Input as MuiInput } from '@/uilibs/mui';
import { Input as AntInput } from '@/uilibs/antd';
import { Input as ChakraInput } from '@/uilibs/chakra';
import { Sparkles } from 'lucide-react';
import CodeView from '@/components/CodeView';
import ComparisonHeader from '@/components/ComparisonHeader';
import { useNavigation } from '@/context/NavigationContext';

export default function InputComparison() {
    const [viewMode, setViewMode] = React.useState<'preview' | 'code'>('preview');
    const { visibleLibraries } = useNavigation();

    return (
        <div className="comp-container">
            <ComparisonHeader
                title="Input Comparison"
                subtitle="Compare text fields and form input styles in high-fidelity."
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
                                <div className="comp-content-wrapper" style={{ width: '100%', maxWidth: '280px' }}>
                                    <div style={{ transform: 'scale(0.9)', width: '100%' }}>
                                        <ShadcnInput placeholder="Type here..." />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="input" library="shadcn" isMini={true} />
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
                                <div className="comp-content-wrapper" style={{ width: '100%', maxWidth: '280px' }}>
                                    <div style={{ transform: 'scale(0.9)', width: '100%' }}>
                                        <MuiInput placeholder="Type here..." fullWidth />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="input" library="mui" isMini={true} />
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
                                <div className="comp-content-wrapper" style={{ width: '100%', maxWidth: '280px' }}>
                                    <div style={{ transform: 'scale(0.9)', width: '100%' }}>
                                        <AntInput placeholder="Type here..." />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="input" library="antd" isMini={true} />
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
                                <div className="comp-content-wrapper" style={{ width: '100%', maxWidth: '280px' }}>
                                    <div style={{ transform: 'scale(0.9)', width: '100%' }}>
                                        <ChakraInput placeholder="Type here..." />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="input" library="chakra" isMini={true} />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
