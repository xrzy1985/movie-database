import { useState } from 'react';

export function useSearchTerm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  return { searchTerm, setSearchTerm };
}

