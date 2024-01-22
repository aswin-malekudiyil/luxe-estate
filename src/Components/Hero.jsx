const Hero = () => {
  return (
    <section className="pt-36">
      <div>
        <h1 className="text-4xl font-semibold tracking-wide">
          Find Unparallel Luxury Properties
          <br /> <span className="py-3">Only on</span> <br />
          <span className="text-5xl pt-3 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 text-transparent bg-clip-text">
            Luxe Estate
          </span>
        </h1>
      </div>
      <div className="pt-[180px] flex justify-between items-start">
        <div className="">
          <div className="flex -space-x-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/14/15/28/smiling-888532_640.jpg"
              alt="broker-1"
              className="w-[60px] h-[60px] rounded-[50%]"
            />
            <img
              src="https://cdn.pixabay.com/photo/2018/01/07/17/42/outdoors-3067868_640.jpg"
              alt="broker-1"
              className="w-[60px] h-[60px] rounded-[50%] y-32"
            />
            <img
              src="https://cdn.pixabay.com/photo/2015/08/14/15/28/smiling-888532_640.jpg"
              alt="broker-1"
              className="w-[60px] h-[60px] rounded-[50%] y-22"
            />
          </div>
          <div className="border-t border-2 border-yellow-300 w-[100px] mt-[28px]"></div>
          <div className="w-[320px] pt-2">
            <p>
              Unlock global luxury at unbeatable prices! Our agents specialize
              in finding your dream ultra-luxe home, tailored to perfection.
            </p>
          </div>
        </div>
        <div className="ml-28 w-[290px] pb-4">
            <h1 className="text-[20px] font-semibold">Get in Touch</h1>
            <input type="text" name="email" id="email" placeholder="Email" className="p-5 w-full mt-2 bg-transparent rounded-2xl border-2 border-yellow-400 focus:outline-none text-white font-bold"/>
            <button className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 text-black font-semibold py-2 px-3 mt-3 rounded-2xl">Enquire</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
