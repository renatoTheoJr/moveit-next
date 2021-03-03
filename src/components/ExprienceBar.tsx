import styles from '../styles/components/ExperienceBar.module.css'
import {useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);
    
    const percentualLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentualLevel}%`}} />
                <span className={styles.currentExperience} style={{ left:`${percentualLevel}%`}}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );

}