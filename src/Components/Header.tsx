import Button from './Button';


function Header(
    {
        title,
        onAdd,
        showAdd
    }: any
) {

//   const onclick = () => {
//     console.log('Click');
// };
  return (
      <header className = 'header'>
        <h1>{title}</h1>
        <Button color = {showAdd? 'red':'green'} text = {showAdd? 'Close': 'Add'} onClick = {onAdd} />
       
      </header>
  );

}
export default Header