import React from 'react';
import {WithAuthRedirect} from '../../../../n4-hoc/WithAuthRedirect';
import { Packs } from './Packs';

export const PacksPage = () => {
    return (
        <WithAuthRedirect>
            <Packs/>
        </WithAuthRedirect>
    );
};