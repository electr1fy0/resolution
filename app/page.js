// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center md:px-96 min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <div className="bg-white rounded-xl py-12 px-16 w-full drop-shadow-md hover:-rotate-1 origin-bottom-left duration-200">
          <p className={" font-serif text-5xl font-medium  mb-8 "}>
            Secret New Year's Resolutions
          </p>
          <div className="text-2xl font-serif">
            <input type="text" className="bg-[#E1D6C0" />

            <hr className="bg-red-500 border-[#AA8636] mt-4 mb-8 " />

            <input type="text" className="bg-[#E1D6C0] w-full" />

            <hr className="bg-red-500 border-[#AA8636] mt-4 mb-8" />

            <input
              type="text"
              className="bg-[#E1D6C0] focus: ring-0 focus:ring-offset-0"
            />

            <hr className="bg-red-500 border-[#AA8636] mt-4 mb-8" />

            <input
              type="text"
              className="bg-[#E1D6C0] outline-none font-serif"
            />

            <hr className="bg-red-500 border-[#AA8636] mt-4 mb-8" />

            <input type="text" className="bg-[#E1D6C0" />

            <hr className="bg-red-500 border-[#AA8636] mt-4 mb-4" />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 mt-20"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by electr1fy0
        </a>
      </footer>
    </div>
  );
}
