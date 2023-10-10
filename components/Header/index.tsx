import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import IconLinks from '@/components/iconLinks'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/Hassaku.svg"
          alt="Hassaku"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <IconLinks />
    </header>
  );
}
