const Events = () => {

    const HandledMyEvent = (e) =>{
        console.log(e)
        console.log("Ativou o evento.")
    }

  return (
    <div>
      <div>
        <button onClick={HandledMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!!")}>Clique aqui também!</button>
      </div>
    </div>
  );
};

export default Events;
