import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/">
      <a className="menu">HOME</a>
    </Link>    
    <Link href="/live">
      <a className="menu">LIVE SCHEDULE</a>
    </Link>
    <Link href="/discography">
      <a className="menu">DISCOGRAPHY</a>
    </Link>    
    <Link href="/photos">
      <a className="menu">PHOTOS</a>
    </Link>
    <Link href="/movie">
      <a className="menu">MOVIE</a>
    </Link>
    <Link href="/contact">
      <a className="menu">CONTACT</a>
    </Link>
    <Link href="/logo-spin">
      <a className="menu">SPIN?</a>
    </Link>
    <style jsx>{`
      nav {
        margin: 0 auto;
        height: 100px;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .menu {  
        font-size: 2em;
        text-decoration: none;
        padding-left: 10px;
        padding-right: 10px;
        color: #000;
      }
      
      .menu:visit {
        color: #000;
      }
      .menu:hover {
        text-decoration: underline;
        color: #000;
      }

      @media only screen and (max-width: 768px) {
        .menu {
          font-size: 1.2em;
        }
      }
    `}</style>
  </nav>
);

export default Nav;