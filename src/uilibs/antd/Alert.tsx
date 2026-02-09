'use client';

import React from 'react';
import { Alert as AntAlert } from 'antd';

export const Alert = ({
    title,
    message,
    description,
    type = 'info',
    showIcon,
    style
}: {
    title?: string;
    message?: string;
    description?: string;
    type?: 'success' | 'info' | 'warning' | 'error';
    showIcon?: boolean;
    style?: React.CSSProperties
}) => {
    // Use title if provided, otherwise fall back to message for backward compatibility
    const displayTitle = title || message;
    return <AntAlert title={displayTitle} description={description} type={type} showIcon={showIcon} style={style} />;
};
