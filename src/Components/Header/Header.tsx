import React from 'react';
import backArrow from '../../assets/images/back-arrow.png';
import switchBtn from '../../assets/images/switch.png';
import HeaderStyle from './Header.module.css';
type HeaderProps = {
	handelClick: () => void;
	goBack: () => void;
	name: string;
};
const Header: React.FC<HeaderProps> = ({ handelClick, goBack, name }) => {
	return (
		<React.Fragment>
			<header id='header' className={HeaderStyle.radio__station_header}>
				<div
					id='back_arrow'
					className={HeaderStyle.radio__station_header_icon}
					onClick={goBack}
				>
					<img id='back_arrow_image' src={backArrow} alt='Back arrow' />
				</div>
				<span id='header_text'>{name}</span>
				<div
					id='switchOnOff'
					className={HeaderStyle.radio__station_header_icon}
					onClick={handelClick}
				>
					<img id='switch_on_off_image' src={switchBtn} alt='Switch on/off' />
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;
