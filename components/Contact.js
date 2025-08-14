import styles from './Contact.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className={styles.container} id="contact">
       <div className={styles.title}>shivangi's socials</div>
       <br></br><br></br><br></br>
      <div className={styles.cardsWrapper}>

        {/* Left card → GitHub */}
        <Link 
          href="https://github.com/Shivangi10-10"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.card} ${styles.cardLeft}`}
        >
          <Image src="/assets/gg.png" alt="GitHub card" width={250} height={400} />
          <div className={styles.badge}> GitHub</div>
        </Link>

        {/* Main card → LinkedIn */}
        <Link 
          href="https://www.linkedin.com/in/shivangi-suyash-05a484259/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.card} ${styles.cardMain}`}
        >
          <Image src="/assets/ll.png" alt="LinkedIn card" width={250} height={400} />
          <div className={styles.smileyWrapper}>
            <Image src="/assets/ssss.png" alt="Smiley" width={40} height={40} />
          </div>
          
          <div className={styles.badge}> LinkedIn</div>
        </Link>

        {/* Right card → Email */}
        {/* <Link 
          href="mailto: suyashshi2011@gmail.com"
          className={`${styles.card} ${styles.cardRight}`}
        >
          <Image src="/assets/ee.png" alt="Email card" width={250} height={400} />
        </Link> */}

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=suyashshi2011@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.card} ${styles.cardRight}`}
        >
          <Image src="/assets/ee.png" alt="Email card" width={250} height={400} />
          <div className={styles.badge}> Email</div>
        </a>
        

      </div>

     
    </div>
  );
}