
const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <a href="#" className="text-3xl italic font-bold bg-gradient-to-r from-yellow-200 via-white to-yellow-200 text-transparent bg-clip-text pb-2">Luxe Estate</a>
        <ul className="list-none flex justify-between gap-8 py-1">
            <li><a href="#" className="font-semibold hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="font-semibold hover:text-yellow-400">Properties</a></li>
        </ul>
        <div className="flex justify-between gap-9">
            <a href="#" className="py-1 font-semibold">Login</a>
            <a href="#" className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-semibold py-2 px-4 rounded-2xl">Register</a>
        </div>
    </div>
  )
}

export default Header