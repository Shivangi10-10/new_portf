import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const textRef = useRef(null)
  const heroRef = useRef(null)
  const imageRef = useRef(null)
  const [isImageColorful, setIsImageColorful] = useState(false)

  useEffect(() => {
    const letters = textRef.current?.querySelectorAll(`.${styles.letter}`)
    if (!letters) return

    const animateLettersOnScroll = () => {
      letters.forEach((letter, index) => {
        letter.style.transform = 'translateX(200px)'
        letter.style.opacity = '0'
        setTimeout(() => {
          letter.style.transition = 'transform 0.8s cubic-bezier(0.625, 0.05, 0, 1), opacity 0.8s ease'
          letter.style.transform = 'translateX(0px)'
          letter.style.opacity = '1'
        }, index * 50)
      })
    }

    // Enhanced image animation
    const animateImage = () => {
      if (imageRef.current) {
        // Initial state - hidden and scaled down
        imageRef.current.style.opacity = '0'
        imageRef.current.style.transform = 'translateY(50px) scale(0.8) rotate(-5deg)'
        imageRef.current.style.filter = 'grayscale(100%) blur(5px)'
        
        setTimeout(() => {
          imageRef.current.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          imageRef.current.style.opacity = '1'
          imageRef.current.style.transform = 'translateY(0px) scale(1) rotate(0deg)'
          imageRef.current.style.filter = 'grayscale(100%) blur(0px)'
          
          // Add floating animation after initial load
          setTimeout(() => {
            imageRef.current.style.animation = 'float 6s ease-in-out infinite'
          }, 1500)
        }, 1000) // Delay image animation after text starts
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateLettersOnScroll()
            animateImage()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    const handleScroll = () => {
      const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)

      letters.forEach((letter, index) => {
        const delay = index * 0.02
        const progress = Math.max(0, Math.min(1, scrollProgress * 3 - delay))
        if (progress > 0 && scrollProgress > 0.1) {
          const translateX = (1 - progress) * 150
          const opacity = Math.min(1, progress * 2)
          letter.style.transform = `translateX(${translateX}px)`
          letter.style.opacity = opacity.toString()
        }
      })

      // Add parallax effect to image on scroll
      if (imageRef.current && scrollProgress < 0.5) {
        const parallaxOffset = scrollProgress * 30
        imageRef.current.style.transform = `translateY(${parallaxOffset}px) scale(1)`
      }
    }

    // Mouse movement effect for image
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) * 0.02
        const deltaY = (e.clientY - centerY) * 0.02
        
        imageRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`
      }
    }

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'translate(0px, 0px) scale(1)'
      }
    }

    // Add mouse listeners to image
    if (imageRef.current) {
      imageRef.current.addEventListener('mousemove', handleMouseMove)
      imageRef.current.addEventListener('mouseleave', handleMouseLeave)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      if (imageRef.current) {
        imageRef.current.removeEventListener('mousemove', handleMouseMove)
        imageRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const createLetters = (text) => {
    return text.split('').map((char, index) => (
      <div key={index} className={styles.letter} aria-hidden="true">
        {char === ' ' ? '\u00A0' : char}
      </div>
    ))
  }

  const handleImageClick = () => {
    setIsImageColorful(!isImageColorful)
  }

  const handleImageHover = () => {
    if (imageRef.current) {
      imageRef.current.style.filter = 'grayscale(0%)'
    }
  }

  const handleImageLeave = () => {
    if (imageRef.current && !isImageColorful) {
      imageRef.current.style.filter = 'grayscale(100%)'
    }
  }

  return (
    <section
      id="home"
      className={styles.hero}
      ref={heroRef}
      style={{
        background:
          'linear-gradient(135deg, #f0ebe6 0%, #ede4d3 25%, #e8dcc6 50%, #f0ebe6 75%, #f5f0e8 100%)'
      }}
    >
      <div className={styles.heroContent}>
        <div className={styles.horizontalWordsRelative} ref={textRef}>
          <h2
            className={styles.horizontalWordsH2}
            aria-label="Hi! I am Shivangi → A passionate developer crafting innovative digital experiences"
          >
            <div className={styles.textSection}>
              {createLetters('Hi! I am ')}
              <span className={styles.boldSection}>
                {createLetters('Shivangi')}
              </span>
            </div>
          </h2>

          <div className={styles.descriptionSection}>
            <a
              href="https://drive.google.com/file/d/1p9Drt3rz3lrSxEw9JmPlvZ-BNTkCP8Et/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeButton}
            >
              Resume
            </a>
            <div className={styles.descriptionText}>
              learn . develop . grow
            </div>
          </div>
        </div>

        {/* Enhanced animated image with click/hover color effect */}
        <div className={styles.imageWrapper}>
          <img 
            ref={imageRef}
            src="/assets/all.png" 
            alt="Shivangi" 
            className={`${styles.heroImage} ${isImageColorful ? styles.colorful : ''}`}
            loading="eager"
            onClick={handleImageClick}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
            style={{
              cursor: 'pointer',
              transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              filter: isImageColorful ? 'grayscale(0%)' : 'grayscale(100%)'
            }}
          />
        </div>
      </div>
    </section>
  )
}