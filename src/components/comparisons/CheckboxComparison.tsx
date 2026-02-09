'use client';

import React from 'react';
import { Checkbox as ShadcnCheckbox } from '@/uilibs/shadcn';
import { Checkbox as MuiCheckbox } from '@/uilibs/mui';
import { Checkbox as AntCheckbox } from '@/uilibs/antd';
import { Checkbox as ChakraCheckbox } from '@/uilibs/chakra';
import { Sparkles } from 'lucide-react';
import CodeView from '@/components/CodeView';
import ComparisonHeader from '@/components/ComparisonHeader';
import { useNavigation } from '@/context/NavigationContext';

export default function CheckboxComparison() {
    const [viewMode, setViewMode] = React.useState<'preview' | 'code'>('preview');
    const { visibleLibraries } = useNavigation();

    return (
        <div className="comp-container">
            <ComparisonHeader
                title="Checkbox Comparison"
                subtitle="Compare checkbox styles and selection states in high-fidelity."
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
                                    <div className="flex items-center space-x-2">
                                        <ShadcnCheckbox id="terms" defaultChecked />
                                        <label htmlFor="terms" className="text-sm text-gray-300">
                                            Accept terms
                                        </label>
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="checkbox" library="shadcn" isMini={true} />
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
                                        <MuiCheckbox defaultChecked />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="checkbox" library="mui" isMini={true} />
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
                                        <AntCheckbox defaultChecked>Checkbox</AntCheckbox>
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="checkbox" library="antd" isMini={true} />
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
                                        <ChakraCheckbox defaultChecked>Checkbox</ChakraCheckbox>
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="checkbox" library="chakra" isMini={true} />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
