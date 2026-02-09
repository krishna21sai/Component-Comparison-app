'use client';

import React, { useMemo } from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavigationProvider, useNavigation } from '@/context/NavigationContext';

function LibraryProviders({ children }: { children: React.ReactNode }) {
    const { theme } = useNavigation();

    const muiTheme = useMemo(() => createTheme({
        palette: {
            mode: theme,
        },
    }), [theme]);

    const antdAlgorithm = theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm;

    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={muiTheme}>
                <AntdRegistry>
                    <ConfigProvider theme={{ algorithm: antdAlgorithm }}>
                        <ChakraProvider value={defaultSystem}>
                            {children}
                        </ChakraProvider>
                    </ConfigProvider>
                </AntdRegistry>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NavigationProvider>
            <LibraryProviders>
                {children}
            </LibraryProviders>
        </NavigationProvider>
    );
}
