import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const aboutRef = useRef(null)
  const audioRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateLetters()
        }
      },
      { threshold: 0.3 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateLetters = () => {
    const letters = titleRef.current?.querySelectorAll(`.${styles.letter}`)
    if (!letters) return

    letters.forEach((letter, index) => {
      letter.style.transform = 'translateY(30px)'
      letter.style.opacity = '0'
      setTimeout(() => {
        letter.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease'
        letter.style.transform = 'translateY(0px)'
        letter.style.opacity = '1'
      }, index * 50)
    })
  }

  const createLetters = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className={styles.letter} aria-hidden="true">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(e => {
        console.log('Audio play failed:', e)
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="about" className={styles.about} ref={aboutRef}>
      <div className={styles.container}>
        {/* Title Section with Letter Animation */}
        <div className={`${styles.titleSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <h1 className={styles.mainTitle} ref={titleRef}>
            {createLetters('a developer built')}
            <br />
            <span className={styles.titleHighlight}>
              {createLetters('for the future.')}
            </span>
          </h1>
          <p className={styles.subtitle}>
            from <em>ideas</em> to <em>reality</em>.
            <svg className={styles.underline} viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5 Q50 2 100 5 T195 5" stroke="#D2B48C" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </p>
        </div>

        {/* Main Content - Two Sections Side by Side */}
        <div className={`${styles.mainContent} ${isVisible ? styles.slideInContent : ''}`}>
          
          {/* Description Section - Left Side */}
          <div className={styles.descriptionSectionLeft}>
            <div className={styles.descriptionContent}>
              <p className={styles.descriptionText}>
                I'm a B.Tech CSE graduate and a passionate developer with a sharp eye for detail and an obsession with turning ideas into innovative digital solutions.
                Wanna know what else keeps my creative gears turning? 🚀
              </p>
            </div>
          </div>

          {/* Hobbies Section - Right Side */}
          <div className={styles.hobbiesSection}>
            {/* Background Blob */}
            <div className={styles.backgroundBlob}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#D2B48C" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.5,81.4,29,72.8,41.8C64.2,54.6,52.6,65.7,39.2,73.2C25.8,80.7,10.6,84.6,-4.8,92.4C-20.2,100.2,-40.4,111.9,-56.4,107.8C-72.4,103.7,-84.2,83.8,-90.6,62.6C-97,41.4,-98,19,-95.8,-2.8C-93.6,-24.6,-88.2,-49.2,-76.4,-66.8C-64.6,-84.4,-46.4,-95,-28.2,-99.6C-10,-104.2,8.2,-102.8,25.2,-95.8C42.2,-88.8,57.9,-76.2,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Image Grid */}
            <div className={styles.imageGrid}>
              <div className={`${styles.imageCard} ${styles.card1}`}>
                <img src="/assets/cw.png" alt="Coding workspace" />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayText}>clean code, clean mind</span>
                </div>
              </div>
              
              <div className={`${styles.imageCard} ${styles.card2}`}>
                <img src="/assets/t.png" alt="UI Design process" />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayText}>off to new destinations</span>
                </div>
              </div>
              
              <div className={`${styles.imageCard} ${styles.card3}`}>
                <img src="/assets/b.png" alt="Team collaboration" />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayText}>learning and growing</span>
                </div>
              </div>
              
              <div className={`${styles.imageCard} ${styles.card4}`}>
                <img src="/assets/a2.png" alt="Modern development" />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayText}>music makes me happy</span>
                  {/* Play/Pause Button */}
                  <button 
                    className={styles.playButton} 
                    onClick={toggleAudio}
                    aria-label={isPlaying ? "Pause song" : "Play song"}
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>
                  <audio 
                    ref={audioRef} 
                    src="/assets/s.mp3" 
                    onEnded={() => setIsPlaying(false)}
                    onError={() => setIsPlaying(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}