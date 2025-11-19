import { getMenuDetail } from "../_libs/microcms";

type Props = {
  params: {
    menu: string;
  };
};

export default async function Page(props: Props) {
  const data = await getMenuDetail(props.params.menu);

  return <div>{data.name}</div>;
}
