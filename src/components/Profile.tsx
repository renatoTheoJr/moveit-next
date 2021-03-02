import styles from '../styles/components/Profile.module.css'


export function Profile() {
    return(
        <div className={styles.profileContainer}>
        <img src="http://github.com/renatoTheoJr.png" alt="Renato Junior" />
        <div>
            <strong>Renato Junior</strong>
            <p>
                <img src="icons/level.svg" alt="Level" />
                Level 1
            </p>
        </div>
        </div >
    );
    
}