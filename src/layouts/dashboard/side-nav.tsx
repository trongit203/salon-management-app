import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ChevronRight from '@mui/icons-material/ChevronRight';
import {
    Box,
    Button,
    Divider,
    Drawer,
    Stack,
    SvgIcon,
    Typography,
    useMediaQuery
} from '@mui/material';
import { items } from './config';
import { SideNavItem } from './side-nav-item';
import { Logo } from '@/components/logo';
import { Scrollbar } from '@/components/scrollbar';

interface IProps {
    onClose: ((event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void) | undefined;
    open: boolean;
}

export const SideNav = (props: IProps) => {
    const { open, onClose } = props;
    const pathname = usePathname();
    // const lgUp = useMediaQuery((theme) => theme?.breakpoints.up('lg'));

    const content = (
        <Scrollbar
            sx={{
                height: '100%',
                '& .simplebar-content': {
                    height: '100%'
                },
                '& .simplebar-scrollbar:before': {
                    background: 'neutral.400'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <Box sx={{ p: 3 }}>
                    <Box
                        component={NextLink}
                        href="/"
                        sx={{
                            display: 'inline-flex',
                            height: 32,
                            width: 32
                        }}
                    >
                        <Logo />
                    </Box>
                    <Box
                        sx={{
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            borderRadius: 1,
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 2,
                            p: '12px'
                        }}
                    >
                        <div>
                            <Typography
                                color="black"
                                variant="subtitle1"
                            >
                                TRONGTRAN
                            </Typography>
                            <Typography
                                color="black"
                                variant="body2"
                            >
                                Production
                            </Typography>
                        </div>
                        <SvgIcon
                            fontSize="small"
                            sx={{ color: 'neutral.500' }}
                        >
                            <ChevronRight />
                        </SvgIcon>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: 'neutral.700' }} />
                <Box
                    component="nav"
                    sx={{
                        flexGrow: 1,
                        px: 2,
                        py: 3
                    }}
                >
                    <Stack
                        component="ul"
                        spacing={0.5}
                        sx={{
                            listStyle: 'none',
                            p: 0,
                            m: 0
                        }}
                    >
                        {items.map((item) => {
                            const active = item.path ? (pathname === item.path) : false;

                            return (
                                <SideNavItem
                                    active={active}
                                    disabled={item.disabled}
                                    external={item.external}
                                    icon={item.icon}
                                    key={item.title}
                                    path={item.path}
                                    title={item.title}
                                />
                            );
                        })}
                    </Stack>
                </Box>
                <Divider sx={{ borderColor: 'neutral.700' }} />
            </Box>
        </Scrollbar>
    );

    // if (lgUp) {
    //     return (
    //         <Drawer
    //             anchor="left"
    //             open
    //             PaperProps={{
    //                 sx: {
    //                     backgroundColor: 'neutral.800',
    //                     color: 'common.white',
    //                     width: 280
    //                 }
    //             }}
    //             variant="permanent"
    //         >
    //             {content}
    //         </Drawer>
    //     );
    // }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.800',
                    color: 'common.white',
                    width: 280
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};

SideNav.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};