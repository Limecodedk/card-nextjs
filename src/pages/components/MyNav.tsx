import Link from 'next/link';
import MenuStyle from '@/styles/Menu.module.scss';

const MyNav = () => {

  const alias = ["Death Smokie", "Alien Scum", "Ping Pong"]

  return (
    <>
      <nav id={MenuStyle.menuContainer}>
        <ul>

          {
            alias.map((ar, index) => (

              <li key={index}>
                <Link href={{
                  pathname: '/Enemies',
                  query: { data: index }
                }}
                /* as={ar} */
                >
                  {ar}
                </Link>
              </li>

            ))
          }
        </ul>
      </nav>
    </>
  );
}

export default MyNav;