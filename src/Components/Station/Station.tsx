import React from 'react';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import StationStyle from './Station.module.css';
import { motion, AnimatePresence } from 'framer-motion';
interface StationProps {
	name: any;
	frequency: any;
	onStationClick(arg: null): any;
	isCurrentlyPlaying: boolean;
}

const Station: React.FC<StationProps> = ({
	name,
	frequency,
	isCurrentlyPlaying,
	onStationClick,
}) => {
	return (
		<React.Fragment>
			<div id='single_station' className='single__station'>
				<AnimatePresence initial={false} exitBeforeEnter={true}>
					{isCurrentlyPlaying && <MediaPlayer />}
				</AnimatePresence>
				<motion.div
					id='radio'
					animate={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 20 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.5 }}
					className={StationStyle.radio__station}
					onClick={() => onStationClick(name)}
				>
					<span className={StationStyle.radio__station_name}>{name}</span>
					<span className={StationStyle.radio__station_frequency}>{frequency}</span>
				</motion.div>
			</div>
		</React.Fragment>
	);
};

export default Station;
