'use client';

import React from 'react';
import { Alert as CharAlert } from '@chakra-ui/react';

export const Alert = ({ children, status = 'info', title, width }: { children?: React.ReactNode; status?: any; title?: string; width?: any }) => {
    return (
        <CharAlert.Root status={status} width={width}>
            <CharAlert.Indicator />
            <CharAlert.Content>
                {title && <CharAlert.Title>{title}</CharAlert.Title>}
                {children && <CharAlert.Description>{children}</CharAlert.Description>}
            </CharAlert.Content>
        </CharAlert.Root>
    );
};
