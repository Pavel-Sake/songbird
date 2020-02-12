import React from "react";
import cn from 'classnames'
import './header.css';


export default function Levels({title, activeLevel, idxActive}) {

  return (
    <li className={cn('headerLevel', {
        ['headerLevel--active']: activeLevel === idxActive,
      }
    )}>{title}</li>
  )
}