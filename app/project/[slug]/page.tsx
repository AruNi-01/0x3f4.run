export default function ProjectPage({ params }: { params: any }) {
  const { slug } = params;

  return (
    <>
      <h1>ProjectPage</h1>
      <p>received slug: {slug}</p>
    </>
  );
}
