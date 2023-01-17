import { ReactNode } from 'react';
import Header from './Header';

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}
