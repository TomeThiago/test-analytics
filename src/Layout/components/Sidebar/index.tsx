import { Link } from 'react-router-dom';

import './styles.css'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Argus Solutions</h1>

      <ul>
        <li>
          <Link to="/">Lista de Graficos 1</Link>
        </li>
        <li>
          <Link to="/page2">Lista de Graficos 2</Link>
        </li>
        <li>
          <Link to="/page3">Lista de Graficos 3</Link>
        </li>
        <li>
          <Link to="/page4">Lista de Graficos 4</Link>
        </li>
      </ul>
    </div>
  );
};
