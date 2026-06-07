import { useParams } from "react-router";
import ButtonDocs from "../../components/button/buttonDocs";

const componentMap = {
  button: <ButtonDocs />,
};

function Components() {
  const { componentName } = useParams();

  const content = componentMap[componentName as keyof typeof componentMap];

  return <section>{content || <p>Compnent not found</p>}</section>;
}

export default Components;
