import * as React from 'react';
// import { useLocation } from 'react-router';
import { Header } from '../components/header';
import { NavBar } from '../components/navBar';

export default function PrimaryContainer() {
  const [routePath, setRoutePath] = React.useState<string>('search');

  React.useEffect(() => {
    // setRoutePath(useLocation().pathname);
    setRoutePath('blast');
  });
  return (
    <>
      <div className="g-primarycontainer-container">
        <Header />
        <NavBar
          item={routePath}
        />
      </div>
    </>
  );
}
