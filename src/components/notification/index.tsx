import { useEffect, useState } from 'react';

const Notification = ({
  message,
  isError,
}: {
  message: string | undefined;
  isError?: boolean;
}) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(true);
    const timer = setTimeout(() => setHidden(false), 3000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <h1
      className={`w-full p-2 rounded ${
        isError ? 'bg-red-400' : 'bg-blue-400'
      } ${hidden ? 'flex' : 'hidden'}`}
    >
      {message}
    </h1>
  );
};

Notification.defaultProps = {
  isError: true,
};
export default Notification;
