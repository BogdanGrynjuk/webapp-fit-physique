import SignInForm from '@/app/components/AuthenticationPageComponents/SignInForm';
import SignUpForm from '@/app/components/AuthenticationPageComponents/SignUpForm';
import clsx from 'clsx';

const AuthForms = ({ isSignUpMode }: { isSignUpMode: boolean }) => {
  return (
    <div
      className={clsx(
        'relative w-full left-[50%] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-[700ms] ease-in-out z-[5]',
        'lg:top-1/2 lg:w-1/2 lg:grid lg:grid-cols-1',
        isSignUpMode
          ? '-translate-x-1/2 lg:-translate-x-1/2 lg:translate-y-0 lg:left-[25%]'
          : '-translate-x-1/2 translate-y-1/2 lg:-translate-x-1/2 lg:translate-y-0 lg:left-[75%]',
      )}
    >
      <SignInForm
        containerStyles={clsx(
          'row-start-1 col-start-1 overflow-hidden transition-all duration-[200ms] delay-[700ms]',
          isSignUpMode ? 'z-[1] opacity-0' : 'opacity-1 z-[2]',
        )}
      />
      <SignUpForm
        containerStyles={clsx(
          'row-start-1 col-start-1 overflow-hidden transition-all duration-[200ms] delay-[700ms]',
          isSignUpMode ? 'opacity-1 z-[2]' : 'z-[1] opacity-0',
        )}
      />
    </div>
  );
};

export default AuthForms;
