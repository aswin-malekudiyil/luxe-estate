import Header from "./Components/Header"
import Hero from "./Components/Hero"

const App = () => {
  return (
    <body className="bg-[url('https://cdn.pixabay.com/photo/2023/07/14/04/04/ai-generated-8126248_1280.png')] bg-cover min-h-screen text-white">
      <div className="bg-gradient-to-b from-black via-transparent to-black min-h-screen">
       <div className="bg-gradient-to-r from-black via-transparent to-transparent min-h-screen px-28 py-6">
          <Header />
          <Hero />
       </div>
      </div>
    </body>
  )
}

export default App