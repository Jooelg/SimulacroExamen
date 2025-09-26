import {loggedInCardsData} from '../DB/CardsLoged'
import Card from './Card';

function MainLoged() {
  return (
    <div className="w-full mt-16 text-center pt-10 px-4 ">
      <h1 className="font-semibold text-2xl md:text-3xl">
        ¡Bienvenido de nuevo!
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        Selecciona una de las siguientes opciones para continuar tu viaje.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {loggedInCardsData.map(card => (
          <Card className="cursor-pointer" key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
}

export default MainLoged;