import { Timeline } from 'antd';

const CustomTimeline = () => {
  const customLineStyle = { height: '160px' };
  const customContentStyle = { fontSize: '16px', maxWidth: '420px' }; // Adjust the font size as needed

  return (
    <Timeline>
      <Timeline.Item
        dot={<div style={{ background: '#000', width: '16px', height: '16px', borderRadius: '50%' }} />}
        style={customLineStyle}
      >
        <h1 style={{marginBottom: '12px'}}>Computer Science</h1>
        <div style={customContentStyle}>Studying Computer Science at CAU opens up a world of unparalleled opportunities for academic and personal growth.</div>
      </Timeline.Item>
      <Timeline.Item
        dot={<div style={{ background: '#000', width: '16px', height: '16px', borderRadius: '50%' }} />}
        style={customLineStyle}
      >
        <h1 style={{marginBottom: '12px'}}>Intern Frontend Developer</h1>
        <div style={customContentStyle}>Collaborated on responsive design implementation, utilized React.js, and actively participated in code reviews.</div>
      </Timeline.Item>
      <Timeline.Item
        dot={<div style={{ background: '#000', width: '16px', height: '16px', borderRadius: '50%' }} />}
        style={customLineStyle}
      >
        <h1 style={{marginBottom: '12px'}}>Frontend Developer</h1>
        <div style={customContentStyle}>As a freelance developer, I collaborate with clients to transform concepts into polished and functional web interfaces.</div>
      </Timeline.Item>
    </Timeline>
  );
};

export default CustomTimeline;
