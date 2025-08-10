import { menuItems } from "../consts/Menu";

export default function Menu() {
  const listMenu = menuItems.map((item) => (
    <li key={item.id} className=" text-lg hover:text-[#04bade]">
      {item.label}
    </li>
  ));

  return (
    <>
      <div>
        <ul className=" flex flex-col items-center gap-2">{listMenu}</ul>
      </div>
    </>
  );
}
