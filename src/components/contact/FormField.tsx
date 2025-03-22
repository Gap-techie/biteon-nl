
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LucideIcon } from 'lucide-react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  error?: string;
  type?: string;
  Icon: LucideIcon;
  as?: 'input' | 'textarea';
}

export function FormField({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  type = 'text',
  Icon,
  as = 'input',
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        {as === 'input' ? (
          <Input 
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            type={type}
            className={`pl-10 bg-white/80 backdrop-blur-sm border-gray-300 focus:border-biteon-blue focus:ring focus:ring-biteon-blue/20 transition-all ${error ? 'border-red-500' : ''}`}
          />
        ) : (
          <Textarea 
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`min-h-[120px] bg-white/80 backdrop-blur-sm border-gray-300 focus:border-biteon-blue focus:ring focus:ring-biteon-blue/20 transition-all ${error ? 'border-red-500' : ''}`}
          />
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
