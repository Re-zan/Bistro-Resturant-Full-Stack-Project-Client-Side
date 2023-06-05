const CommonBanner = ({ img, title, des }) => {
  return (
    <div>
      <div
        className="hero h-[800px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className=" bg-slate-900 bg-opacity-70 lg:w-[1320px] lg:h-[450px] p-6 md:p-20  lg:py-[145px]">
            <h1 className="mb-5 text-6xl font-bold font-[Cinzel]">{title}</h1>
            <p className="mb-5 text-2xl font-[Cinzel]">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
