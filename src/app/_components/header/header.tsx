import styles from './header.module.scss';
import Image from 'next/image';
import ImageHandler from '@/app/_functions/imageHandler';
import Link from 'next/link';

export default function Header() {
    return ( 
        <>
            <header className={styles.container}>
                <div className={styles.sloganField}>
                    <p><span className={styles.largeLetter}>D</span>är du behöver det -<span className={styles.largeLetter}>N</span>är du behöver det</p>
                </div>
                <div className={styles.iconAndMenuContainer}>
                    <div className={styles.logo}>
                    <Link href={"/"}>
                        <Image
                            src={ImageHandler("MEDIME_6_1_nrdlgp").toURL()} 
                            alt="MediMe logo" 
                            height={110} 
                            width={110}>
                        </Image>
                    </Link>
                    </div>
                    <div className={styles.menu}>
                        <Link href={"/"}>
                            <Image className={styles.user}
                                src={ImageHandler("User_ceeohs").toURL()} 
                                alt="User icon" 
                                height={41} 
                                width={41}>
                            </Image>
                        </Link>
                        <Link href={"/"}>
                            <Image className={styles.chat}
                                src={ImageHandler("Chat_Bubble_yk1mvt").toURL()} 
                                alt="Chat icon" 
                                height={40} 
                                width={40}>
                            </Image>
                        </Link>
                        <Link href={"/"}>
                            <Image className={styles.hamburger}
                                src={ImageHandler("Menu_e6umko").toURL()} 
                                alt="hamburger button" 
                                height={50} 
                                width={50}>
                            </Image>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}