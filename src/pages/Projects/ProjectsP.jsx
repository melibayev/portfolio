import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card';
import { projects } from '../../components/data';
import styles from './Projects.module.scss';

const ProjectsP = () => {
  return (
    <section id={styles.projects}>
        <div className="container">
            <div className={styles['projects-title']}>
                <NavLink to={'/'}>Home /</NavLink>
                <p>My projects</p>
            </div>
            <div className={styles.projects}>
                {projects.map(card => (
                    <Card {...card} key={card.id}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProjectsP