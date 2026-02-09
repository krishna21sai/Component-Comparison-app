'use client';

import React from 'react';
import { Switch as CharSwitch } from '@chakra-ui/react';

export const Switch = (props: any) => {
    return (
        <CharSwitch.Root {...props}>
            <CharSwitch.Control>
                <CharSwitch.Thumb />
            </CharSwitch.Control>
        </CharSwitch.Root>
    );
};
