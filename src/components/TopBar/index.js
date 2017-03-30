import React from 'react';
import logo from './marvel.png';
import { Menu } from './Menu'
import './style.css'

export const TopBar = () => {
	const renderLogo = () => {
		return (
			<div className="TopBar__logo">
				<img src={logo} alt='logo' />
			</div>
		)
	}

  return (
    <div className="TopBar">
    	{renderLogo()}
      <Menu />
    </div>
  )
}
