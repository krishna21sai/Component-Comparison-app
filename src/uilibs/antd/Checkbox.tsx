'use client';

import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';

export const Checkbox = ({ children, ...props }: any) => {
    return <AntCheckbox {...props}>{children}</AntCheckbox>;
};
