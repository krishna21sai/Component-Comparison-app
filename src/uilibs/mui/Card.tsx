'use client';

import React from 'react';
import {
    Card as MuiCard,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Typography,
    IconButton,
    IconButtonProps,
    Avatar as MuiAvatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export {
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Typography,
    IconButton,
    FavoriteIcon,
    ShareIcon,
    ExpandMoreIcon,
    MoreVertIcon
};

export const Card = MuiCard;

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));
