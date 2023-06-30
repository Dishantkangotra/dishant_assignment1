import Image from "next/image";

const Body = () => {
  return (
    <div
      className="w-full  bg-body_color text-white "
    >
      <h3 className=" font-sans text-2xl font-extrabold text-center pt-7">
        Transforming Lives-Financially!
      </h3>
      <div className="flex p-5">
        <div className="flex w-3/5 h-full mt-10 pl-5">
          <div className="pt-10">
            <Image src="/images/journalist.jpeg" width={150} height={150} />
          </div>
          <div className="w-3/5 pt-10 ml-4">
            <h4 className="text-base">Simrin Sirur</h4>
            <p className="text-xs">Journalist</p>
            <p className="text-xs">The Print, Gurugram</p>
            <p className="text-xm mt-3">
              "I was afraid to learn investments and savings <br/> because it seemed
              to fly over my head, but Ankit was <br/> extremely patient and walked me
              through everything... I <br/> now feel more confident to handle my own
              money."
            </p>
          </div>
          <div className="mt-16 pt-2 ">
            <svg
              fill="none"
              className="w-6 h-6 stroke-white"
            >
              <path
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex ">
          <Image
            src="/images/bodyimg.png"
            width={430}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;