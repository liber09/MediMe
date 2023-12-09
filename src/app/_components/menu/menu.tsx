"use client"
import { useState, useEffect } from 'react'
import styles from './menu.module.scss'
import Link from 'next/link'

export default function Menu() {
    const[isOpen,setIsOpen] = useState(false);

    function handleClick(this: any){
        setIsOpen(!isOpen);
    }
    function handleLinkClick(){
        if(isOpen){
            setIsOpen(false);
        }
    }

    return (
    <nav className={isOpen === false ? styles.main_nav : styles.main_nav_open}>
        <button onClick={handleClick} className={isOpen === false ? styles.main_nav_toggle : styles.main_nav_toggle_open}></button>
        <menu className={isOpen === false ? styles.main_menu : styles.main_menu_open}>
        <Link href="/" passHref
           onClick={handleLinkClick} className={styles.link}>
            <li className={isOpen === false ? styles.main_menu_item : styles.main_menu_item_open}>Hem</li>
        </Link>
        <Link href="/account" passHref
           onClick={handleLinkClick} className={styles.link}>
            <li className={isOpen === false ? styles.main_menu_item : styles.main_menu_item_open}>Konto</li>
        </Link>
        </menu>
    </nav>
    )
}