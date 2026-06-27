import HomePage, {generateMetadata as generateHomeMetadata, viewport} from "../page";

export {viewport};

export async function generateMetadata({params}: {params: {locale: string}}) {
  return generateHomeMetadata({params});
}

export default HomePage;
