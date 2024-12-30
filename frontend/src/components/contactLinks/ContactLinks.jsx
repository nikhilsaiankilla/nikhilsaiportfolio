import { useState, useEffect } from 'react';
import './style.scss';

const ContactLinks = ({ onLinksChange, sLinks }) => {
  const [links, setLinks] = useState(sLinks);
  
  const addLink = () => {
    const updatedLinks = [...links, ''];
    setLinks(updatedLinks);
  };

  const deleteLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  const updateLink = (index, newUrl) => {
    const updatedLinks = links.map((link, i) => (i === index ? newUrl : link));
    setLinks(updatedLinks);
  };

  useEffect(() => {
    onLinksChange(links);
  }, [links, onLinksChange]);

  return (
    <div className="contact-links-container">
      <h2>Contact Links</h2>
      <div className="links">
        {links.map((link, index) => (
          <div key={index} className="link-item">
            <input
              type="text"
              value={link}
              onChange={(e) => updateLink(index, e.target.value)}
              placeholder="Enter link URL"
            />
            <button
              type="button"
              className="delete-btn"
              onClick={() => deleteLink(index)}
              title="Delete Link"
            >
              D
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="add-btn" onClick={addLink}>
        +
      </button>
    </div>
  );
};

export default ContactLinks;
