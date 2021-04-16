import { FC } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { useHistory  } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

interface NavBarProps {
    index: number
}

const NavBar: FC<NavBarProps> = ( { index } ) => {
    const history = useHistory();
    const navigationPath = [ "/", "/game"];

    const changePage = ( page: number ) => {
        history.push(navigationPath[page]);
    }

    return (
        <Paper>
            <Tabs
                value={index}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon tabs"
            >
                <Tab icon={<PersonIcon />} label="Me" onClick={() => changePage(0)}/>
                <Tab icon={<SportsEsportsIcon />} label="Tic Tac Toe" onClick={() => changePage(1)}/>
            </Tabs>
        </Paper>
    )
}

export default NavBar;