'use client';

import React from 'react';
import { Avatar as ShadcnAvatar } from '@/uilibs/shadcn';
import { Avatar as MuiAvatar } from '@/uilibs/mui';
import { Avatar as AntAvatar } from '@/uilibs/antd';
import { Avatar as ChakraAvatar } from '@/uilibs/chakra';
import { Sparkles } from 'lucide-react';
import CodeView from '@/components/CodeView';
import ComparisonHeader from '@/components/ComparisonHeader';
import { useNavigation } from '@/context/NavigationContext';

export default function AvatarComparison() {
    const [viewMode, setViewMode] = React.useState<'preview' | 'code'>('preview');
    const { visibleLibraries } = useNavigation();
    const sampleImage = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop";

    return (
        <div className="comp-container">
            <ComparisonHeader
                title="Avatar Comparison"
                subtitle="Compare user representation and fallback design in high-fidelity."
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
                                        <ShadcnAvatar src={sampleImage} alt="User" fallback="JD" />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="avatar" library="shadcn" isMini={true} />
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
                                        <MuiAvatar src={sampleImage} alt="User" />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="avatar" library="mui" isMini={true} />
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
                                        <AntAvatar src={sampleImage} size={40} />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="avatar" library="antd" isMini={true} />
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
                                        <ChakraAvatar src={sampleImage} name="John Doe" />
                                    </div>
                                </div>
                            ) : (
                                <CodeView component="avatar" library="chakra" isMini={true} />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
