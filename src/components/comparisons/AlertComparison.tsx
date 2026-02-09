'use client';

import React from 'react';
import { Alert as ShadcnAlert, AlertTitle as ShadcnAlertTitle, AlertDescription as ShadcnAlertDescription } from '@/uilibs/shadcn';
import { Alert as MuiAlert } from '@/uilibs/mui';
import { Alert as AntAlert } from '@/uilibs/antd';
import { Alert as ChakraAlert } from '@/uilibs/chakra';
import { Sparkles } from 'lucide-react';
import CodeView from '@/components/CodeView';
import ComparisonHeader from '@/components/ComparisonHeader';
import { useNavigation } from '@/context/NavigationContext';

export default function AlertComparison() {
    const [viewMode, setViewMode] = React.useState<'preview' | 'code'>('preview');
    const { visibleLibraries } = useNavigation();

    return (
        <div className="comp-container">
            <ComparisonHeader
                title="Alert Comparison"
                subtitle="Compare notification and alert message patterns in high-fidelity."
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
                                <div className="comp-content-wrapper" style={{ width: '100%', maxWidth: '350px' }}>
                                    <ShadcnAlert>
                                        <ShadcnAlertTitle>Heads up!</ShadcnAlertTitle>
                                        <ShadcnAlertDescription>
                                            You can add components to your app using the CLI.
                                        </ShadcnAlertDescription>
                                    </ShadcnAlert>
                                </div>
                            ) : (
                                <CodeView component="alert" library="shadcn" isMini={true} />
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
                                <div className="comp-content-wrapper" style={{ width: '100%', maxWidth: '350px' }}>
                                    <MuiAlert severity="info">
                                        This is an info alert — check it out!
                                    </MuiAlert>
                                </div>
                            ) : (
                                <CodeView component="alert" library="mui" isMini={true} />
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
                                <div className="comp-content-wrapper" style={{ width: '100%', maxWidth: '350px' }}>
                                    <AntAlert
                                        title="Informational Notes"
                                        description="Additional description and information about copywriting."
                                        type="info"
                                        showIcon
                                    />
                                </div>
                            ) : (
                                <CodeView component="alert" library="antd" isMini={true} />
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
                                <div className="comp-content-wrapper" style={{ width: '100%', maxWidth: '350px' }}>
                                    <ChakraAlert status="info" title="Chakra UI Alert">
                                        This is the alert description.
                                    </ChakraAlert>
                                </div>
                            ) : (
                                <CodeView component="alert" library="chakra" isMini={true} />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
