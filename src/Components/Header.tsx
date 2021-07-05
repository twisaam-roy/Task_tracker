import Button from './Button';
import { useLocation } from 'react-router-dom';


function Header(
  {
    title,
    onAdd,
    showAdd
  }: any
) {
  let location = useLocation()
  //   const onclick = () => {
  //     console.log('Click');
  // };
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === "/" && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />)}

    </header>
  );

}
export default Header