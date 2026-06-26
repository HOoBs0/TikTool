'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const getNewPath = (newLocale) => {
    return pathname.replace(/^\/(ar|en)/, `/${newLocale}`);
  };

  return (
    <details className="border border-white bg-neutral-900 rounded-2xl">
      <summary><i className="fa-solid fa-language m-1"></i></summary>
      <ul className="p-2 bg-neutral-900 rounded-2xl">
        <li className='link link-hover'><Link href={getNewPath('en')} className="hover:bg-neutral-800">EN</Link></li>
        <li className='link link-hover'><Link href={getNewPath('ar')} className="hover:bg-neutral-800">AR</Link></li>
      </ul>
    </details>
  );
}
