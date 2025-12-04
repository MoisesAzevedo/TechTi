"use client";

import React from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export default function PhoneInput({ 
  value, 
  onChange, 
  placeholder = "Telefone*", 
  required = false,
  className = ""
}: PhoneInputProps) {
  
  // Função para aplicar máscara no telefone
  const formatTelefone = (inputValue: string) => {
    // Remove tudo que não é número
    const numbers = inputValue.replace(/\D/g, '');
    
    // Aplica a máscara (11) 99999-9999
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
    }
    
    return value; // Retorna o valor anterior se exceder 11 dígitos
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTelefone(e.target.value);
    onChange(formatted);
  };

  return (
    <input 
      type="tel" 
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required={required}
      className={className}
      maxLength={15} // (11) 99999-9999 = 15 caracteres
    />
  );
}
