import MenuList from "./_components/MenuList";
import { getMenuList } from "./_libs/microcms";

export default async function Home() {
  const data = await getMenuList();
  return (
    <>
      <MenuList menu={data.contents} />
    </>
  );
}
