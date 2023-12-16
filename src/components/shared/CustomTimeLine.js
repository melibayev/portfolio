import { Timeline } from 'antd';
import styles from '../../pages/Home/HomeP.module.scss'

const CustomTimeline = () => {
  const customLineStyle = { height: '160px' };
  const customContentStyle = { fontSize: '16px', maxWidth: '420px' }; // Adjust the font size as needed

  return (
    <Timeline>
      <Timeline.Item
        dot={<div style={{ background: '#000', width: '16px', height: '16px', borderRadius: '50%' }} />}
        style={customLineStyle} className={styles.timeline}
      >
        <h1 style={{marginBottom: '12px'}} className={styles['timeline-header']}>Computer Science</h1>
        <div style={customContentStyle} className={styles['timeline-description']}>Studying Computer Science at CAU opens up a world of unparalleled opportunities for academic and personal growth.</div>
      </Timeline.Item>
      <Timeline.Item
        dot={<div style={{ background: '#000', width: '16px', height: '16px', borderRadius: '50%' }} />}
        style={customLineStyle} className={styles.timeline}
      >
        <h1 style={{marginBottom: '12px'}} className={styles['timeline-header']}>Intern Frontend Developer</h1>
        <div style={customContentStyle} className={styles['timeline-description']}>Collaborated on responsive design implementation, utilized React.js, and actively participated in code reviews.</div>
      </Timeline.Item>
      <Timeline.Item
        dot={<div style={{ background: '#000', width: '16px', height: '16px', borderRadius: '50%' }} />}
        style={customLineStyle} className={styles.timeline}
      >
        <h1 style={{marginBottom: '12px'}} className={styles['timeline-header']}>Frontend Developer</h1>
        <div style={customContentStyle} className={styles['timeline-description']}>As a freelance developer, I collaborate with clients to transform concepts into polished and functional web interfaces.</div>
      </Timeline.Item>
    </Timeline>
  );
};

export default CustomTimeline;
