export default function Header(props) {

  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    // window.location.reload();   // reload the page after removing the logged in user
    props.changedUser('');
  }
  
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">hello <br /><span className="text-3xl font-semibold">{props.name || props.email}</span></h1>
      <button onClick={logoutUser} className="bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium">Log out</button>
    </div>
  )
}