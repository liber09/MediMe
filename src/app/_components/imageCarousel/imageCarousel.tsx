import React, { Component }  from "react"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import styles from './header.module.scss';
import ImageHandler from "@/app/_functions/imageHandler";

const ImageCarousel: React.FC = () => {
  return (
    <Carousel>
      <article>
        <Image className={styles.carouselImage}
          src={ImageHandler("synskadade_t2sa0m").toURL()} 
          alt="En bild på en grupp synskade personer som sitter tillsammans och läser punkskriftsböcker och fikar" 
          height={1080} 
          width={1080}>
        </Image>
      </article>
      <article>
        <Image src="image2.jpg" alt="Image 2" />
      </article>
    </Carousel>
  );
};

export default ImageCarousel;