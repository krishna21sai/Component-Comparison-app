'use client';

import React from 'react';
import { Checkbox as CharCheckbox } from '@chakra-ui/react';

export const Checkbox = ({ children, ...props }: any) => {
    return (
        <CharCheckbox.Root {...props}>
            <CharCheckbox.Control />
            {children}
        </CharCheckbox.Root>
    );
};
