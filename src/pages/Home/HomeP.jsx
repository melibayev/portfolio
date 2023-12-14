import { Fragment } from "react"
import CountUp from 'react-countup';
import { TypeAnimation } from "react-type-animation";
import CustomTimeline from "../../components/shared/CustomTimeLine";

// icons and images
import { GoDownload } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbDeviceMobileCode } from "react-icons/tb";
import AVATAR_IMG from '../../assets/avatar.jpg'


import styles from './HomeP.module.scss'


const HomeP = () => {
  return (
    <Fragment>
        {/* ABOUT SECTION (start) */}
        <section id={styles.about}>
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
                        <button>Hire Me</button>
                        <button>Download CV <span><GoDownload /></span></button>
                    </div>
                </div>
            </div>
        </section>
        {/* ABOUT SECTION (end) */}

        {/* SERVICES SECTION (start) */}
        <section id={styles.services}>
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
        <section id={styles.experience}>
            <div className="container">
                <div className={styles['experience-title']}></div>
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
    </Fragment>
  )
}

export default HomeP