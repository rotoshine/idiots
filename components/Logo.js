const Logo = () => (
  <div className="logo">
    <img className="logo-image" src="/static/images/logo-200x200.png" />
    <div className="logo-text">IDIOTS</div>
    <style jsx>{`
      .logo {
        height: 220px;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center; 
      }

      .logo-image {
        padding-top:0px;
      }

      .logo-text {
        font-family: 'Slackey';
        font-size: 200px;
      }

      @media only screen and (max-width: 1366px) {
        .logo {
          height: 150px;          
        }
        .logo-image {
          width: 90px;
          height: 90px;
        }
        .logo-text {
          font-size: 90px;
        }
      }

      @media only screen and (max-width: 768px) {
        .logo {
          height: 100px;          
        }
        .logo-image {
          width: 60px;
          height: 60px;
        }
        .logo-text {
          font-size: 60px;
        }
      }
    `}</style>
  </div>
);

export default Logo;