import React from 'react';
import FooterStyle from './Footer.module.css';
import { motion } from 'framer-motion';
type FooterProps = {
	stationName: string;
};
const Footer: React.FC<FooterProps> = ({ stationName }) => {
	return (
		<React.Fragment>
			<motion.footer
				id='footer'
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 20 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.55 }}
				className={FooterStyle.radio__station_footer}
			>
				<span className={`${FooterStyle.radio__station_footer_header} footer_items`}>
					currently playing
				</span>
				<span className={`${FooterStyle.radio__station_footer_station_name} footer_items`}>
					{stationName}
				</span>
			</motion.footer>
		</React.Fragment>
	);
};

export default Footer;
