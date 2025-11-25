import { getMenuList } from "@/app/_libs/microcms";
import Search from "@/app/_components/Search";
import MenuList from "@/app/_components/MenuList";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: menu } = await getMenuList({
    q: searchParams.q,
  });

  return (
    <>
      <MenuList menu={menu} />
    </>
  );
}
