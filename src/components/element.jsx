import { useAtom } from "jotai";
import itemsData from "../data/items";
import { countAtom } from "../data/state";

function handleClick(title) {
  alert(`Clicked ${title}`);
}

function Element() {
    const [count , setCount] = useAtom(countAtom);
  return (
    <>
      {itemsData.map((item) => {
        return (
          <div key={item.id} className="p-[10px] w-[280px] mb-[20px] bg-stone-100 rounded-md shadow-md col-span-1">
            <h1 className="mb-[10px]">{item.title}</h1>
            <p className="mb-[10px]">
              {item.description}
            </p>
            <button
              onClick={() => setCount((x) => x+9087678968)}
              className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Click me
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Element;
