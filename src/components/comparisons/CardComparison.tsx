'use client';

import { Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import CodeView from '@/components/CodeView';
import ComparisonHeader from '@/components/ComparisonHeader';
import { useNavigation } from '@/context/NavigationContext';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Card as MuiCard,
    CardHeader as MuiCardHeader,
    CardMedia as MuiCardMedia,
    CardContent as MuiCardContent,
    CardActions as MuiCardActions,
    Collapse as MuiCollapse,
    Typography as MuiTypography,
    IconButton as MuiIconButton,
    Avatar as MuiAvatar,
    FavoriteIcon,
    ShareIcon,
    ExpandMoreIcon,
    MoreVertIcon,
    ExpandMore as MuiExpandMore
} from '@/uilibs/mui';
import {
    Card as AntCard,
    Meta as AntMeta,
    Avatar as AntAvatar
} from '@/uilibs/antd';
import {
    Card as ChakraCard,
    Image as ChakraImage,
    Text as ChakraText,
    Button as ChakraButton
} from '@/uilibs/chakra';

const DATA = {
    title: "Design Systems Meetup",
    description: "A practical talk on component APIs, accessibility, and shipping faster.",
    image: "https://avatar.vercel.sh/shadcn1",
    date: "September 14, 2026",
    action: "View Event"
};

export default function CardComparison() {
    const [muiExpanded, setMuiExpanded] = useState(false);
    const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
    const { visibleLibraries } = useNavigation();

    const handleMuiExpandClick = () => {
        setMuiExpanded(!muiExpanded);
    };

    return (
        <div className="comp-container">
            <ComparisonHeader
                title="Card Comparison"
                subtitle="Compare high-fidelity, authentic card implementations from each design system."
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
                        <div className="comp-previewArea">
                            {viewMode === 'preview' ? (
                                <Card className="relative mx-auto w-[350px] pt-0 overflow-hidden">
                                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                                    <img
                                        src={DATA.image}
                                        alt="Event cover"
                                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                                    />
                                    <CardHeader>
                                        <CardAction>
                                            <Badge variant="secondary">Featured</Badge>
                                        </CardAction>
                                        <CardTitle>{DATA.title}</CardTitle>
                                        <CardDescription>
                                            {DATA.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button className="w-full">{DATA.action}</Button>
                                    </CardFooter>
                                </Card>
                            ) : (
                                <CodeView component="card" library="shadcn" />
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
                        <div className="comp-previewArea">
                            {viewMode === 'preview' ? (
                                <MuiCard sx={{ width: 350, borderRadius: 3, bgcolor: '#1e1e1e' }}>
                                    <MuiCardHeader
                                        avatar={
                                            <MuiAvatar sx={{ bgcolor: '#ef4444' }}>D</MuiAvatar>
                                        }
                                        action={
                                            <MuiIconButton aria-label="settings" sx={{ color: '#94a3b8' }}>
                                                <MoreVertIcon />
                                            </MuiIconButton>
                                        }
                                        title={<MuiTypography sx={{ color: 'white', fontWeight: 600 }}>{DATA.title}</MuiTypography>}
                                        subheader={<MuiTypography sx={{ color: '#94a3b8', fontSize: '0.8rem' }}>{DATA.date}</MuiTypography>}
                                    />
                                    <MuiCardMedia
                                        component="img"
                                        height="140"
                                        image={DATA.image}
                                        alt="Event"
                                    />
                                    <MuiCardContent>
                                        <MuiTypography variant="body2" sx={{ color: '#cbd5e1' }}>
                                            {DATA.description}
                                        </MuiTypography>
                                    </MuiCardContent>
                                    <MuiCardActions disableSpacing>
                                        <MuiIconButton aria-label="add to favorites" sx={{ color: '#94a3b8' }}>
                                            <FavoriteIcon />
                                        </MuiIconButton>
                                        <MuiIconButton aria-label="share" sx={{ color: '#94a3b8' }}>
                                            <ShareIcon />
                                        </MuiIconButton>
                                        <MuiExpandMore
                                            expand={muiExpanded}
                                            onClick={handleMuiExpandClick}
                                            aria-expanded={muiExpanded}
                                            sx={{ color: '#94a3b8' }}
                                        >
                                            <ExpandMoreIcon />
                                        </MuiExpandMore>
                                    </MuiCardActions>
                                    <MuiCollapse in={muiExpanded} timeout="auto" unmountOnExit>
                                        <MuiCardContent>
                                            <MuiTypography sx={{ color: 'white', mb: 1 }}>Details:</MuiTypography>
                                            <MuiTypography variant="body2" sx={{ color: '#94a3b8' }}>
                                                Join us for an evening of insightful discussion. We'll cover everything from
                                                atomic design to large-scale component library management.
                                            </MuiTypography>
                                        </MuiCardContent>
                                    </MuiCollapse>
                                </MuiCard>
                            ) : (
                                <CodeView component="card" library="mui" />
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
                        <div className="comp-previewArea">
                            {viewMode === 'preview' ? (
                                <AntCard
                                    style={{ width: 350, borderRadius: '12px', overflow: 'hidden', background: '#141414', border: '1px solid rgba(255,255,255,0.1)' }}
                                    cover={
                                        <img
                                            alt="example"
                                            src={DATA.image}
                                            style={{ height: '180px', objectFit: 'cover' }}
                                        />
                                    }
                                    actions={[
                                        <FavoriteIcon key="fav" style={{ fontSize: '18px', color: '#94a3b8' }} />,
                                        <ShareIcon key="share" style={{ fontSize: '18px', color: '#94a3b8' }} />,
                                        <MoreVertIcon key="more" style={{ fontSize: '18px', color: '#94a3b8' }} />,
                                    ]}
                                >
                                    <AntMeta
                                        avatar={<AntAvatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />}
                                        title={<span style={{ color: 'white' }}>{DATA.title}</span>}
                                        description={<span style={{ color: '#94a3b8' }}>{DATA.description}</span>}
                                    />
                                </AntCard>
                            ) : (
                                <CodeView component="card" library="antd" />
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
                        <div className="comp-previewArea">
                            {viewMode === 'preview' ? (
                                <ChakraCard.Root width="350px" overflow="hidden" borderRadius="xl" bg="#1a202c" border="1px solid rgba(255,255,255,0.1)">
                                    <ChakraImage
                                        src={DATA.image}
                                        alt="Design system"
                                        height="200px"
                                        width="100%"
                                        objectFit="cover"
                                    />
                                    <ChakraCard.Body gap="2" p="6">
                                        <ChakraCard.Title color="white">{DATA.title}</ChakraCard.Title>
                                        <ChakraCard.Description color="gray.400">
                                            {DATA.description}
                                        </ChakraCard.Description>
                                    </ChakraCard.Body>
                                    <ChakraCard.Footer gap="2" p="6" pt="0">
                                        <ChakraButton variant="solid" width="full" bg="blue.600" color="white">Register Now</ChakraButton>
                                        <ChakraButton variant="ghost" color="gray.400">Share</ChakraButton>
                                    </ChakraCard.Footer>
                                </ChakraCard.Root>
                            ) : (
                                <CodeView component="card" library="chakra" />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
