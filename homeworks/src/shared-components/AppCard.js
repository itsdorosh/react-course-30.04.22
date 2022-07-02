import {Link} from 'react-router-dom';

/**
 * @function AppCard – function for represent sub-app in modules
 * @param title – name of sub-app
 * @param description - description of sub-app
 * @param link – an object with text and href to
 * @returns
 */
export function AppCard({title, description, link}) {
  return (<div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link.href}>{link.text}</Link>
    </div>);
}
