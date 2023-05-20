function Header() {
  return (
    <div>
      <nav className='blue-grey darken-3'>
        <div className='nav-wrapper'>
          <a href='badges.html' className='brand-logo'>
            Guest's List
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='badges.html' style={{ letterSpacing: '2px' }}>
                HOME
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Header };
