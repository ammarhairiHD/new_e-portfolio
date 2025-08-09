import { menuItems } from "../consts/Menu";

export default function Menu() {
  const listMenu = menuItems.map((item) => <li key={item.id}>{item.label}</li>);

  return (
    <>
      <div>
        <ul className=" flex flex-col items-center">{listMenu}</ul>
      </div>
    </>
  );
}
