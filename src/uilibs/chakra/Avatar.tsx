'use client';

import React from 'react';
import { Avatar as CharAvatar } from '@chakra-ui/react';

export const Avatar = ({ src, name }: { src?: string; name?: string }) => {
    return (
        <CharAvatar.Root>
            <CharAvatar.Fallback name={name} />
            <CharAvatar.Image src={src} />
        </CharAvatar.Root>
    );
};
