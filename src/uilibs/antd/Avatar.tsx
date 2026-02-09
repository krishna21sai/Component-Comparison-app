'use client';

import React from 'react';
import { Avatar as AntAvatar } from 'antd';

export const Avatar = ({ src, alt, name, size }: { src?: string; alt?: string; name?: string; size?: number }) => {
    return <AntAvatar src={src} alt={alt} size={size}>{name?.charAt(0) || alt?.charAt(0)}</AntAvatar>;
};
