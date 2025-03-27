import { useState } from 'react';

const useAuthMode = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const toggleMode = () => setIsSignUpMode((prevState) => !prevState);

  return { isSignUpMode, toggleMode };
};

export default useAuthMode;
