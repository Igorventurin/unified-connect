import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";

const Segmento = () => {
  const { slug } = useParams();

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-24 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground capitalize">
          Segmento: {slug}
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">Página em construção.</p>
      </div>
    </Layout>
  );
};

export default Segmento;
