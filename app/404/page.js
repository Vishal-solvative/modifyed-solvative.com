import TinaComp from "../../components/TinaComp";
import { client } from "../../tina/__generated__/databaseClient";
const NotFound = async () => {
  
  const res = await client.queries.page({
    relativePath: `pageNotFound.mdx`,
  });

  return (
    <TinaComp
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
};

export default NotFound;
