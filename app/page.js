// import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center md:px-48 min-h-screen p-8 mt-12 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <div className="bg-[#7D211F] rounded-lg  py-12 px-16 w-full  hover:shadow-2xl hover:shadow-orange-900 duration-300 ">
          <p
            className={
              " font-serif text-3xl font-medium text-[#F8E49F] mb-1  italic"
            }
          >
            secret new year resolutions
          </p>
          <p className="font-serif text-xl text-[#F8E49F] mb-16">
            (they last as long as your resolutions do)
          </p>
          <div className="text-2xl  font-serif">
            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />

            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />

            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />

            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />

            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />

            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />

            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />

            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />

            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />

            <input
              type="text"
              className="w-full outline-none bg-[#7D211F] text-[#F8E49F]"
            />

            <hr className="border-[#F8E49F] mt-0.5 mb-1 " />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 mt-12 text-[#d6c27d] mb-8 font-mono"
          href="#"
        >
          Made with pain by electr1fy0
        </a>
      </footer>
    </div>
  );
}
