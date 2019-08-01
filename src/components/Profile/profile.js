/**
 * Profile : 
 * 
 */

import React from 'react';
import { Redirect } from 'react-router';

const Profile = () => {
    return (
        <div>
            <Redirect to="/login"/>
        </div>
    )
}

export default Profile;