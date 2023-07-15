import { FC } from 'react';
import { BiLoader } from 'react-icons/bi';

type Props = {
  children?: React.ReactNode;
  loading?: boolean;
} & JSX.IntrinsicElements['button'];

export const Button: FC<Props> = ({
  children,
  className,
  disabled,
  loading,
  ...props
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 border-2 border-gray-700 hover:border-orange-400 hover:text-orange-400 hover:shadow-2xl hover:scale-105 px-4 py-2 rounded-lg transition-all mt-5 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 active:shadow-none relative ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <BiLoader className="animate-spin" style={{ fontSize: '1.5rem' }} />
      )}
      {children}
    </button>
  );
};
