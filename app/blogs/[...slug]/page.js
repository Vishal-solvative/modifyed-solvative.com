import React from "react";
import client from "../../../tina/__generated__/client";
import BlogClientPage from "./client-page";

export default async function BlogPage({ params }) {
  const data = await client.queries.blogs({
    relativePath: `${params.slug}.mdx`,
  });

  return (
    <BlogClientPage
      data={JSON.parse(JSON.stringify(data.data))}
      query={data.query}
      variables={data.variables}
    ></BlogClientPage>
  );
}

export async function generateStaticParams() {
  const blogs = await client.queries.blogsConnection();
  const paths = blogs.data?.blogsConnection.edges.map((edge) => ({
    filename: edge.node._sys.breadcrumbs,
  }));
  return paths || [];
}
