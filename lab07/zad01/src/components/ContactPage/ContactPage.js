import React, { useRef, useEffect } from 'react';

const ContactPage = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    const email = inputRef.current.value;
    alert(`Dziękujemy, skontaktujemy się z Toba pod adresem: ${email}`);
  };

  return (
    <div>
      <h3>Contact Page</h3>
      <div>
        <h4>Lets talk!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
          quam id justo hendrerit mollis. Sed feugiat erat ac tortor vehicula,
          et gravida ante tincidunt. Quisque iaculis urna a libero consequat
          rutrum.
        </p>
        <label>Email</label>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>SEND</button>
      </div>
    </div>
  );
};

export default ContactPage;
