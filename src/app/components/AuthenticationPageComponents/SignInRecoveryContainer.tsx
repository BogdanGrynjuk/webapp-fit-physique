import React, { useState } from 'react';
import SignInForm from './SignInForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import clsx from 'clsx';

type SignInRecoveryContainerProps = {
  containerStyles: string;
};
const SignInRecoveryContainer = ({
  containerStyles,
}: SignInRecoveryContainerProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className={clsx(
        'flip-wrapper',
        'transition-[opacity,transform] duration-[500ms] ease-[ease]',
        isFlipped ? 'flipped' : '',
        containerStyles,
      )}
    >
      <SignInForm
        containerStyles="flip-panel front-panel"
        onFlip={() => setIsFlipped(!isFlipped)}
      />
      <ForgotPasswordForm
        containerStyles="flip-panel back-panel"
        onFlip={() => setIsFlipped(!isFlipped)}
      />
    </div>
  );
};

export default SignInRecoveryContainer;
