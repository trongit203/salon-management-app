import { SvgIcon } from "@mui/material";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded'

export const items = [
    {
        title: 'Overview',
        path: '/',
        icon: (
            <SvgIcon>
                <Person2RoundedIcon />
            </SvgIcon>
        ),
        disabled: false,
        external: false,
    }
]