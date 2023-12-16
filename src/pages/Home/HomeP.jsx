import { Fragment, useEffect, useRef } from "react"
import CountUp from 'react-countup';
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import CustomTimeline from "../../components/shared/CustomTimeLine";

// icons and images
import { GoDownload } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbDeviceMobileCode } from "react-icons/tb";
import AVATAR_IMG from '../../assets/avatar.jpg'


import styles from './HomeP.module.scss'
import { settings } from "../../components/shared/CustomCarouselSettings";
import { projects } from '../../components/data/index'
import Card from "../../components/Card";
import { NavLink } from "react-router-dom";

const HomeP = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) aboutRef.current.id = styles.about;
    if (servicesRef.current) servicesRef.current.id = styles.services;
    if (experienceRef.current) experienceRef.current.id = styles.experience;
    if (portfolioRef.current) portfolioRef.current.id = styles.portfolio;
    if (contactRef.current) contactRef.current.id = styles.contact;
  }, []);
  return (
    <Fragment>
        {/* ABOUT SECTION (start) */}
        <section ref={aboutRef}>
            <div className="container">
                <div className={styles.about}>
                    <div className={styles['about-img']}>
                        <img src={AVATAR_IMG} alt="" />
                        <p>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Hi! I’m Elbek',
                                1000,
                                'I’m Frontend Developer',
                                1000,
                            ]}
                            speed={10}
                            repeat={Infinity}
                            />
                            </p>
                    </div>
                    <h2>Developer for Websites and Apps</h2>
                    <p>Specializing in UI design, responsive web design, and visual development. Passionate about delivering excellence in frontend development.</p>
                    <div className={styles['about-btns']}>
                        <button><NavLink to={'https://t.me/notjustdev'} target={"_blank"}>Hire Me</NavLink></button>
                        <button><a href={require('../../assets/cv/CV.pdf')} download='My CV'>Download CV <span><GoDownload /></span></a></button>
                    </div>
                </div>
            </div>
        </section>
        {/* ABOUT SECTION (end) */}

        {/* SERVICES SECTION (start) */}
        <section ref={servicesRef}>
            <div className="container">
                <div className={styles.services}>
                    <div className={styles['services-info']}>
                        <div className={styles['services-info-item']}>
                            <div className={styles['services-info-item-logo']}>
                                <IoCodeSlashOutline />
                            </div>
                            <div className={styles['services-info-item-description']}>
                                <p>Web Development</p>
                                <span>Transforming design concepts into interactive and functional websites using the latest frontend technologies.</span>
                            </div>
                        </div>
                        <div className={styles['services-info-item']}>
                            <div className={styles['services-info-item-logo']}>
                                <LiaLaptopCodeSolid />
                            </div>
                            <div className={styles['services-info-item-description']}>
                                <p>Frontend Frameworks</p>
                                <span>Utilizing popular frontend frameworks such as React.js and Vue.js to create dynamic and efficient single-page applications</span>
                            </div>
                        </div>
                        <div className={styles['services-info-item']}>
                            <div className={styles['services-info-item-logo']}>
                                <TbDeviceMobileCode />
                            </div>
                            <div className={styles['services-info-item-description']}>
                                <p>Responsive Design</p>
                                <span>Crafting websites that look and function flawlessly across various devices and screen sizes</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['services-main']}>
                        <h2>My Services</h2>
                        <p>As a frontend developer, I offer a range of services aimed at creating visually appealing, user-friendly, and responsive web experiences.</p>
                        <div className={styles['services-main-stats']}>
                            <div>
                                <CountUp end={6} duration={3} delay={2}/>+
                                <p>Month experience</p>
                            </div>
                            <div>
                                <CountUp end={20} duration={3} delay={2}/>+
                                <p>Project complete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* SERVICES SECTION (end) */}

        {/* EXPERICENCE SECTION (start) */}
        <section ref={experienceRef}>
            <div className="container">
                <div className={styles['experience-title']}>My Experience</div>
                <div className={styles.experience}>
                    <div className={styles['experience-time']}>
                        <div>
                            <p>Central Asian University</p>
                            <span>4 years (2022-2026)</span>
                        </div>
                        <div>
                            <p>Itransition group</p>
                            <span>(July, 2023 - September, 2023)</span>
                        </div>
                        <div>
                            <p>Freelance</p>
                            <span>(Sept-till now)</span>
                        </div>
                    </div>
                    <div className={styles['experience-info']}>
                        <CustomTimeline />
                    </div>
                </div>
            </div>
        </section>
        {/* EXPERICENCE SECTION (end) */}

        {/* PORTFOLIO SECTION (start) */}
        <section ref={portfolioRef}>
            <div className="container">
                <div className={styles['portfolio-title']}>
                    Portfolio
                </div>
                <div className={styles['portfolio-subtitle']}>
                    <h2>Let's have a look at my portfolio</h2>
                    <span><NavLink to={'/projects'}>See All</NavLink></span>
                </div>
                <div className={styles.portfolio}>
                    <Slider {...settings}>
                        {projects.map(card => (
                            <Card {...card} key={card.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
        {/* PORTFOLIO SECTION (end) */}
    </Fragment>
  )
}

export default HomeP