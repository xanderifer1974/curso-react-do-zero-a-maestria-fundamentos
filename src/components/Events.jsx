const Events = () => {

    const HandledMyEvent = (e) =>{
        console.log(e)
        console.log("Ativou o evento.")
    }

    const RenderSomething =  (value) =>{
        if(value){
            return <h1>Renderiza este h1 se value for true</h1>
        }else{
            return <h1>Renderiza este h1 se value for false</h1>
        }

    };

  return (
    <div>
      <div>
        <button onClick={HandledMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!!")}>Clique aqui também!</button>
      </div>
      {RenderSomething(true)}
      {RenderSomething(false)}
    </div>
  );
};

export default Events;
