import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';


function Nav(){
    return(
        <>
            <Link to ="/">
                <Button>Homepage</Button>
            </Link>
            <Link to ="/posts">
                <Button>Posts 1</Button>
            </Link>
        </>
    );
}

export default Nav;