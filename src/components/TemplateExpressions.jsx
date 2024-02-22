import MyComponent from "./MyComponent";

const TemplateExpression = () => {
  const name = "Alexandre";
  const data = {
    age: 49,
    job: "Desenvolvedor Web"
  }


  return (
    <div>
      <h2> "Olá {name}, tudo bem?"</h2>
      <p>Você atua como {data.job}</p>
      <MyComponent/>
    </div>
  );
};

export default TemplateExpression;
