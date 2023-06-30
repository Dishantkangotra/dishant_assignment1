import Image from "next/image";
const Header = () => {
  return (
    <div
      className="w-full  font-sans text-white text-center "
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(21, 156, 152, 1), rgba(19, 143, 158, 1))",
      }}
    >
      <div className="pt-4">
        <h1
          className="leading-9  text-4xl font-bold  mb-3"
        >
          Backed by the best
        </h1>
        <h4 className="leading-6  text-lg mb-4">
          Wealth is backed and supported by
        </h4>
    </div>
      <div className="justify-center flex  pb-4">
        <Image src="/images/headerimg.png" alt="headerimg" width={550} height={400} />
      </div>
    </div>
  );
};

export default Header;
