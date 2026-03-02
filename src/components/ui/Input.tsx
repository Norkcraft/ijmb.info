import { InputHTMLAttributes } from 'react';
export function Input(props: InputHTMLAttributes<HTMLInputElement>) { return <input {...props} className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm" />; }
