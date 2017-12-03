import Link from 'next/link';
import Router from 'next/router';

const menus = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'LIVE SCHEDULE',
    path: '/live'
  },
  {
    name: 'DISCOGRAPHY',
    path: '/discography'
  },
  {
    name: 'PHOTOS',
    path: '/photos'
  },
  {
    name: 'MOVIE',
    path: '/movie'
  },
  {
    name: 'CONTACT',
    path: '/contact'
  },
  {
    name: 'SPIN?',
    path: '/logo-spin'
  }  
]
const Nav = () => (
  <nav className="nav">
    {menus.map((menu, i) => {      
      const selected = (typeof window === 'object') && (Router.asPath === menu.path);
      
      return (
        <Link key={i} href={menu.path}>
          <a className={`menu ${selected && 'selected'}`}>{menu.name}</a>
        </Link> 
      );   
    })}    
    <style jsx>{`
      .nav {
        margin: 0 auto;
        height: 100px;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        font-family: 'Rock Salt', cursive;
      }

      .menu {  
        font-size: 2em;
        text-decoration: none;
        padding-left: 20px;
        padding-right: 20px;
        color: #000;
        font-weight: 700;    
        text-underline-position: under;    
      }
      
      .menu.selected {
        text-decoration: underline;
      }

      .menu:visit {
        color: #000;
      }
      .menu:hover {
        text-decoration: underline;
        color: #000;
      }

      @media only screen and (max-width: 1366px) {
        .nav {
          height: 200px;
        }
        .menu {
          font-size: 1.2em;
        }
      }

      @media only screen and (max-width: 768px) {
        .nav {
          height: 300px;
        }
        .menu {
          font-size: 1.2em;
        }
      }
    `}</style>
  </nav>
);

export default Nav;