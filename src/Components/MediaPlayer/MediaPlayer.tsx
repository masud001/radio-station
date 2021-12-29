import React from 'react';
import minusIcon from '../../assets/images/minus.png';
import plusIcon from '../../assets/images/plus.png';
import backgroundImg from '../../assets/images/station-cover.png';
import MediaPlayerStyle from './MediaPlayer.module.css';
import { motion } from 'framer-motion';
const MediaPlayer = () => {
	return (
		<React.Fragment>
			<motion.div
				id='media_player'
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 20 }}
				exit={{ opacity: 0, y: 20 }}
				transition={{ duration: 1 }}
				className={MediaPlayerStyle.radio__station_media_player}
			>
				<div className={MediaPlayerStyle.radio__station_media_volume}>
					<img src={minusIcon} alt='Turn down the volume' />
				</div>
				<div
					className={MediaPlayerStyle.radio__station_media_cover}
					style={{ backgroundImage: `url(${backgroundImg})` }}
				/>
				<div className={MediaPlayerStyle.radio__station_media_volume}>
					<img src={plusIcon} alt='Turn up the volume' />
				</div>
			</motion.div>
		</React.Fragment>
	);
};

export default MediaPlayer;
