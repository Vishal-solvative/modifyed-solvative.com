import { client } from "../../tina/__generated__/databaseClient";
import ClientPage from "./client-page";
export default async function Page({ params }) {
  if (params.slug == "_next,static,css,app,styles.css.map") {
    return;
  }
  const data = await client.queries.page({
    relativePath: `${params.slug}.mdx`,
  });
  return (
    <ClientPage
      data={JSON.parse(JSON.stringify(data.data))}
      query={data.query}
      variables={data.variables}
    ></ClientPage>
  );
}

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection.edges.map((edge) => ({
    filename: edge.node._sys.breadcrumbs,
  }));

  return paths || [];
}
