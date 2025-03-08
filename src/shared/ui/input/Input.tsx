import * as React from 'react';
import { cn } from '@/shared/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

type InputProps = React.ComponentProps<'input'> & {
  label?: string;
  error?: string;
  placeholder?: string;
  isPassword?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, placeholder, isPassword, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="space-y-1">
        {label && <label className="block text-sm font-medium">{label}</label>}
        <div className="relative">
          <input
            ref={ref}
            type={isPassword && !showPassword ? 'password' : 'text'}
            className={cn(
              'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              error
                ? 'border-destructive ring-destructive/20 dark:ring-destructive/40'
                : '',
              className
            )}
            placeholder={placeholder}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          )}
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
