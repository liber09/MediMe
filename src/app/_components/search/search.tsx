import styles from './search.module.scss';
import Image from 'next/image';
import ImageHandler from '@/app/_functions/imageHandler';

export default function Search() {
    return ( 
        <>
            <div className={styles.searchContainer}>
                <input 
                    className={styles.searchField} 
                    type="text"
                    placeholder="Sök..." 
                />
                <div className={styles.searchIcon}>
                    <Image 
                        src={ImageHandler("Search_sepg8z").toURL()} 
                        alt="MediMe logo" 
                        height={20} 
                        width={20}>
                    </Image>
                </div>
                
            </div>
        </>
    )
}