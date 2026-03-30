import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../utils/constants'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-box">
        <div className="brand-mark">✂</div>
        <div>
          <h1>Barber Pro</h1>
          <p>Gestão premium</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
