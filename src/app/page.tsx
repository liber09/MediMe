import Image from 'next/image'
import styles from './page.module.scss'
import Search from './_components/search/search'

export default function Home() {
  return (
    <main className={styles.main}>
      <Search></Search>
    </main>
  )
}
