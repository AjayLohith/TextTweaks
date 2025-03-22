import React from 'react';

const About = (props) => {
  const listItemStyle = {
    backgroundColor: 'transparent',
    color: props.mode === 'dark' ? 'white' : '#213547',
    padding: '8px 0',
    borderBottom: 'none',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px'
  };

  const features = [
    { title: 'Convert Case', desc: 'Instantly switch your text to UPPERCASE, lowercase, or Title Case' },
    { title: 'Remove Extra Spaces', desc: 'Clean up your text by removing multiple spaces' },
    { title: 'Reverse Text', desc: 'Flip your text backward for special applications' },
    { title: 'Clear Text', desc: 'Erase all content with one click' },
    { title: 'User-Friendly Interface', desc: 'Simple, clutter-free design' },
    { title: 'Instant Processing', desc: 'See changes applied immediately' }
  ];

  return (
    <div className="container mt-1">
      <h2 style={{ color: props.mode === 'dark' ? 'white' : '#213547' }}>About Us-TextTweaks</h2>
      <div className="card" style={{
        backgroundColor: props.mode === 'dark' ? '#373A40' : 'white',
        color: props.mode === 'dark' ? 'white' : '#213547'
      }}>
        <div className="card-body">
          <p>
            TextTweaks is the ultimate text manipulation tool designed to make your text processing fast, easy, and efficient. Whether you're a student, writer, developer, or anyone who frequently works with text, TextTweaks provides a set of powerful utilities to modify and refine your text with just a few clicks.
         
            At TextTweaks, we believe that small improvements can lead to big productivity gains. Our intuitive interface allows you to quickly transform text without the need for complex tools or software.
          </p>
          
          <h5 className="mt-4 mb-3">Key Features:</h5>
          <div className="list-group list-group-flush ps-0">
            {features.map((feature, index) => (
              <div key={index} className="list-group-item" style={listItemStyle}>
                <span>✔️</span>
                <div>
                  <strong>{feature.title}:</strong> {feature.desc}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4">
            The goal is to enhance the productivity by providing a fast and reliable way to manipulate text. Whether you're formatting an essay, debugging code, or simply playing around with words, TextTweaks is here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;