'use client';

import React from 'react';
import { Button as CharButton } from '@chakra-ui/react';

export const Button = ({ children, ...props }: React.ComponentProps<typeof CharButton>) => {
    return (
        <CharButton size="md" variant="solid" colorPalette="blue" {...props}>
            {children}
        </CharButton>
    );
};
