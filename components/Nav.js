import Link from 'next/link'
import Router from 'next/router'
import classNames from 'classnames'

const menus = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'live',
    path: '/live'
  },
  {
    name: 'discography',
    path: '/discography'
  },
  {
    name: 'photos',
    path: '/photos'
  },
  {
    name: 'movies',
    path: '/movie'
  },
  {
    name: 'contact',
    path: '/contact'
  }
]
const Nav = () => (
  <nav className="nav">
    {menus.map((menu, i) => {
      const selected = (typeof window === 'object') && (Router.asPath === menu.path);
      
      return (
        <Link key={i} href={menu.path}>
          <a className={classNames('menu', {
            selected,
          })}>{menu.name}</a>
        </Link> 
      );   
    })}    
    <style jsx>{`
      .nav {
        font-family: 'AHDN', cursive;
        text-align: center;
        background-color: #eee;
        padding: 1rem;
      }

      .menu {  
        font-size: 4.5rem;
        text-decoration: none;
        padding-left: 2rem;
        padding-right: 2rem;
        color: #999;
        font-weight: 700;  
      }
      
      .menu.selected {
        color: #000;
      }

      .menu:visit {
        color: #999;
      }

      .menu:hover {
        text-decoration: underline;
        color: #000;
      }

      @media only screen and (max-width: 1366px) {
        .menu {
          font-size: 1.5em;
        }
      }

      @media only screen and (max-width: 768px) {
        .menu {
          font-size: 1.2em;
          padding-left: .8rem;
          padding-right: .8rem
        }        
      }
    `}</style>
  </nav>
);

export default Nav;