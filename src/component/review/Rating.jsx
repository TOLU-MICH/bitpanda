import rating from "../../assets/star-full-icon.svg";

export default function Rating({ text, rate, style, cStyle }) {
  const divs = [];
  for (let i = 0; i < 5; i++) {
    divs.push(
      <div className={" bg-gray-300 w-fit flex p-2 " + (i < rate && cStyle)}>
        <img src={rating} alt="" className={"w-4 " + style} />
      </div>
    );
  }
  return (
    <div className="group relative flex w-fit gap-1">
      {divs}

      <p className="bg-black text-white w-max text-xl absolute -bottom-8 left-5 group-hover:block hidden">
        {text}
      </p>
    </div>
  );
}
