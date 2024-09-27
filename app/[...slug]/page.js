import TinaComp from "../../components/TinaComp";
import { client } from "../../tina/__generated__/client";
import ClientPage from "./client-page";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection.edges.map((edge) => ({
    slug: edge.node._sys.breadcrumbs,
  }));

  return paths || [];
}

export async function fetchData(slug) {
  try {
    if (
      slug == "vite.svg.mdx" ||
      slug == "favicon.ico" ||
      slug == "_next,static,css,app,styles.css.map"
    ) {
      return;
    }
    const data = await client.queries.page({
      relativePath: `${slug}.mdx`,
    });

    if (!data?.data) {
      return { notFound: true };
    }

    return {
      props: {
        data: JSON.parse(JSON.stringify(data.data)),
        query: data.query,
        variables: data.variables,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const result = await fetchData(slug);
  if (result.notFound) {
    // notFound(); // Redirect to 404 page
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
  }

  return (
    <ClientPage
      data={result.props.data}
      query={result.props.query}
      variables={result.props.variables}
    />
  );
}
