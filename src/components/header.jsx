import { useAtom } from "jotai";
import { countAtom } from "../data/state";

function Header() {
  const [count , setCount] = useAtom(countAtom);
  return (
    <>
      <div className="bg-white flex justify-between flex-row px-[90px] pt-[30px]">
        <h1 className="bebas-font border-l">MTech-10</h1>
        <ul className="list-none flex justify-between flex-row listNav">
          <li className="list-item active-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Coneatct</li>
        </ul>
        <button className="bg-gray-700 hover:bg-gray-950 text-white rounded-md py-[10px] px-[20px]">
          Items {count}
        </button>
      </div>
    </>
  );
}

export default Header;
