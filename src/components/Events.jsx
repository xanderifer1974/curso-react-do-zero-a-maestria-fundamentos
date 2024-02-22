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
    </div>
  );
};

export default Events;
