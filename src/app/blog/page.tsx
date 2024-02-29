import '@/app/globals.css';
import Link from 'next/link';

export default function BlogHome() {
  return (
    <div className='App-blog'>
      <h1>blog</h1>
      <Link href='/blog/0'>0</Link>
      <Link href='/blog/1'>1</Link>
      <Link href='/blog/2'>2</Link>
    </div>
  );
}