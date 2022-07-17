import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from '../styles/Home.module.css'

export const Header = () => {
  const {data: session, status} = useSession()

  return (
    <header>
      <noscript>
        <style>{'.nojs-show { opacity: 1; top: 0; }'}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p className={`nojs-show ${(!session && status ==="loading") ? styles.loading : styles.loaded}`}>
          {!session &&
            <>
              <span className={styles.notSignedInText}>You are not signed in</span>
              <button
                href='..../api/auth/signin'
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </button> 
            </>}
          {session &&
            <>
              {session.user.image && <span style={{ backgroundImage: `url(${session.user.image})` }} className={styles.avatar} />}
              <span className={styles.signedInText}>
                <small>Signed in as</small><br />
                <strong>{session.user.name || session.user.email}</strong>
              </span>
              <button
                href='/api/auth/signout'
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </button>
            </>}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}><Link href='/'><a>Home</a></Link></li>
          <li className={styles.navItem}><Link href='/client'><a>Client</a></Link></li>
          <li className={styles.navItem}><Link href='/server'><a>Server</a></Link></li>
          <li className={styles.navItem}><Link href='/protected'><a>ASD</a></Link></li>
          <li className={styles.navItem}><Link href='/api-example'><a>API</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}
