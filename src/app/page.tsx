import React from "react"
import Image from 'next/image'
import styles from './page.module.scss'
import Search from './_components/search/search'
import ImageHandler from "./_functions/imageHandler"

export default function Home() {
  return (
    <main className={styles.main}>
      <Search></Search>
      <Image className={styles.emergency}
        src={ImageHandler("112_w6gree").toURL()} 
        alt="Bild med en utryckande ambulans och texten vid livshotande tillstånd, ring 112" 
        height={845} 
        width={1080}>
      </Image>
      <section className={styles.askEllie}>
        <Image className={styles.ellieImage}
          src={ImageHandler("maskot_elefanten1_upto0i").toURL()} 
          alt="En bild på en tecknad elefant som står på bakbenen och håller upp ena frambenet och vinkar" 
          height={1080} 
          width={1080}>
        </Image>
        <p className={styles.askEllieTitle}>Fråga vår intellifant Ellie</p>
        <p className={styles.allergic}>Allergi?</p>
        <p className={styles.legPain}>Ont i benet?</p>
        <p className={styles.cold}>Förkyld?</p>
        <p className={styles.covid}>Covid?</p>
        <Image className={styles.heartAsk}
          src={ImageHandler("Heart_With_Plus_Symbol_and_People_Health_Logo_2_prfpte").toURL()} 
          alt="två hjärtan i varandra i rött och blått med texten fråga innuti hjärtat" 
          height={500} 
          width={500}>
        </Image>
      </section>
      <section className={styles.violence}>
        <Image className={styles.violenceImage}
          src={ImageHandler("brottsutsatt_uskanr").toURL()} 
          alt="En man och en kvinna som står med ansiktena mot varandra, mannen ser arg ut" 
          height={3780} 
          width={3780}>
        </Image>
        <h2 className={styles.violenceSectionTitle}>Är du utsatt för våld?</h2>
        <p className={styles.violenceText}>Lever du i en våldsam relation?
          Är du kanske själv den som utövar våld?</p>
        <p className={styles.violenceText}>Ring</p>
        <p className={styles.violenceText}><a href='https://kvinnofridslinjen.se/' target="_blank">Kvinnofridslinjen</a> - <a href='tel:004620505050'>020-50 50 50</a></p>
        <p className={styles.violenceText}><a href='https://stodlinjenforman.se/' target="_blank">Stödlinjen för män</a> - <a href='tel:004620808080'>020-80 80 80</a></p>
      </section>
      <section className={styles.findChatHealtCareCenter}>
        <Image className={styles.healthCareCenterImage}
          src={ImageHandler("vardcentral_vb3fon").toURL()} 
          alt="En bild på en vårdcentralsbyggnad med snö på marken och träden utanför" 
          height={781} 
          width={1080}>
        </Image>
        <button className={styles.findAndChatButton}>Hitta & Chatta</button>
      </section>
      <p className ={styles.textUnderImage}>Hitta din vårdcentral, chatta direkt med dem, begär recept och boka tid</p>
      <section className={styles.hopeless}>
        <Image className={styles.hopelessImage}
          src={ImageHandler("Hopeless_itexip").toURL()} 
          alt="En bild bakifrån på en man som står på en hög klippa och blickar ut över havet. Himlen är mörk och vågorna skummar nedanför klippan. " 
          height={3780} 
          width={3780}>
        </Image>
        <p className ={styles.textUnderImage}>Har du självmordstankar? Eller är du anhörig till någon som du är rädd ska ta sitt liv? Kontakta <a href='https://mind.se/' target='_blank'>Mind självmordslinjen</a> på <a href='tel:90101'>90101</a></p>
      </section>
      <section className={styles.tooMuch}>
        <article className={styles.leftColumn}>
          <Image className={styles.tooMuchImage}
            src={ImageHandler("4_txasal").toURL()} 
            alt="En kvinna sitter ensam vid ett bord och håller i ett vinglas. På bordet står ett andra vinglas. Kvinnan ser olycklig ut." 
            height={1080} 
            width={1080}>
          </Image>
          <p className={styles.notAlone}>Du är inte ensam, det finns hjälp att få när suget blir för stort</p>
        </article>
        <article className={styles.rightColumn}>
          <p className={styles.oneGlassTooMuch}>Blir det ett glas för mycket?</p>
          <Image className={styles.tooMuchImage}
            src={ImageHandler("2_jjzg6f").toURL()} 
            alt="En man sitter finklädd med ett tomt vinglas i handen. Mannen ser sorgsen ut." 
            height={1080} 
            width={1080}>
          </Image>
        </article>
      </section>
    </main>
  )
}
