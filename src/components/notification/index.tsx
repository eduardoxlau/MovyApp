import { useEffect, useState } from 'react';

const Notification = ({ message }: { message: string }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(true);
    const timer = setTimeout(() => setHidden(false), 3000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <h1
      className={`w-full p-2 bg-red-400 rounded ${hidden ? 'flex' : 'hidden'}`}
    >
      {message}
    </h1>
  );
};
export default Notification;
