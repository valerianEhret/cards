import React from 'react';
import {NavLink} from 'react-router-dom';
import paksListIcon from "../../../../n3-styles/images/packsListLinkIcon.svg";
import profileIcon from "../../../../n3-styles/images/profileListLinkIcon.svg";

export const HeaderMain = () => {
    return (
        <header className={'header'}>
            <div className={'container header__container'}>
                <span className={'header__title'}>it-incubator</span>
                <nav className={'header__nav'}>
                    <NavLink className={'header__link'}
                             activeClassName={'header__link_active'}
                             to={'/packs'}>
                        <img className={'header__icon'} src={paksListIcon} alt="packs list"/>
                        <span className={'header__link__title header__link__title_packsList'}>Packs list</span>
                    </NavLink>
                    <NavLink className={'header__link header__link__profile'}
                             activeClassName={'header__link_active'}
                             to={'/profile'}>
                        <img className={'header__icon header__icon__profile'} src={profileIcon} alt="profile"/>
                        <span className={'header__link__title'}>Profile</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

