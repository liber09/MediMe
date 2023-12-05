"use client";
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
                <Link href={"/"}>
                    <Image className={styles.logo}
                        src={ImageHandler("MEDIME_6_1_nrdlgp").toURL()} 
                        alt="MediMe logo" 
                        height={110} 
                        width={110}>
                    </Image>
                </Link>
            </header>
        </>
    )
}