import * as React from 'react';
import s from './App.modules.scss';
import './custom.css';
import cn from 'classnames';

interface Props {
    title : string;
    }

export const App = ({ title = "Some Cool Title!" }: Props) => {
    return (
        <div className={cn(s.header,'color')}>
            {title}
        </div>
    )
}