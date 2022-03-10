import React, { useCallback, useState, useEffect, useRef, useContext, FC } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { LangContext } from '../languagecontext/lang';

interface HeaderProps {
    fixed?: boolean;
    transparent?: boolean;
}

const LanguageHeader: FC<HeaderProps> = ({ fixed, transparent }) => {
    const { state: { language }, dispatch: { setLanguage, translate } } = useContext(LangContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownEl = useRef<HTMLUListElement>(null);

    let headerClass = 'header';

    if (fixed) {
        headerClass += ' header--fixed';
    }

    if (transparent) {
        headerClass += ' header--transparent';
    }

    const handleClickOutside = useCallback((e) => {
        if (showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
            setShowDropdown(false);
        }
    }, [showDropdown, setShowDropdown, dropdownEl]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [handleClickOutside]);

    const chooseLanguageHandler = (value: string) => {
        setShowDropdown(false);
        setLanguage(value);
    }

    return (
        <header className={headerClass}>
            <div className="container mx-auto">
                <div className="header__brand">
                    <h1><Link to="/">Unity Mart</Link></h1>
                </div>
                <div className="flex justify-center">

                    <ul className="flex justify-between">
                        <li><NavLink to="/home">{translate('women')}</NavLink></li>
                        {/* <li><NavLink to="/women">{translate('women')}</NavLink></li> */}
                        <li><NavLink to="/men">{translate('men')}</NavLink></li>
                    </ul>

                    <div className="px-2">
                        <p className="selected" onClick={() => setShowDropdown(!showDropdown)}>{language}</p>
                        {showDropdown && <ul className="" ref={dropdownEl}>
                            <li onClick={() => chooseLanguageHandler('EN')}>English</li>
                            <li onClick={() => chooseLanguageHandler('BN')}>Bangla</li>
                            <li onClick={() => chooseLanguageHandler('FR')}>French</li>
                        </ul>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default LanguageHeader;