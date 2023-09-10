import styles from './styles.module.css'
import avatar from './../../assets/img/avatar2.jfif'

export function Card(){
    return(
        <div className={styles.container}>

            <div className={styles.content}>

                <div className={styles.header}>
                    <img src={avatar} alt="avatar" width={100} />
                </div>

                <div className={styles.main}>
                    <h3>Usuário Anônimo <span>37</span></h3>
                    <span>Goiânia Goiás</span>
                </div>

                <div className={styles.footer}>
                    <div className={styles.box}>
                        <h3>80k</h3>
                        <span>Followers</span>
                    </div>
                    <div className={styles.box}>
                        <h3>800k</h3>
                        <span>Likes</span>
                    </div>
                    <div className={styles.box}>
                        <h3>1.2k</h3>
                        <span>Photos</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}