'use client';

import React from 'react';
import { Switch as ShadcnSwitch } from '@/uilibs/shadcn';
import { Switch as MuiSwitch } from '@/uilibs/mui';
import { Switch as AntSwitch } from '@/uilibs/antd';
import { Switch as ChakraSwitch } from '@/uilibs/chakra';
import { Sparkles } from 'lucide-react';
import CodeView from '@/components/CodeView';
import ComparisonHeader from '@/components/ComparisonHeader';
import { useNavigation } from '@/context/NavigationContext';

export default function SwitchComparison() {
    const [viewMode, setViewMode] = React.useState<'preview' | 'code'>('preview');
    const { visibleLibraries } = useNavigation();

    return (
        <div className="comp-container">
            <ComparisonHeader
                title="Switch Comparison"
                subtitle="Compare toggle switches and their interaction patterns in high-fidelity."
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
                                        <ShadcnSwitch defaultChecked />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="switch" library="shadcn" isMini={true} />
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
                                        <MuiSwitch defaultChecked />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="switch" library="mui" isMini={true} />
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
                                        <AntSwitch defaultChecked />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="switch" library="antd" isMini={true} />
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
                                        <ChakraSwitch defaultChecked />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="switch" library="chakra" isMini={true} />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
