import MainLoged from "../components/MainLoged";
import { useUserContext } from "../components/UserContext";
import { articleData } from "../DB/Cards";

function Main() {
  const { isLoggedIn,  } = useUserContext();
  return (
    <main className='bg-gray-100 w-full mt-16 mb-10 text-center'>
      {isLoggedIn ? <MainLoged /> : <>
      <h1 className="m-0 font-semibold p-2 pt-10"> Tu Camino hacia una <i> Vida Equilibrada</i> comienza </h1>

      <section className="grid max-w-full p-4 gap-4 md:grid-cols-2"> 
        {articleData.map(({ id, imageSrc, imageAlt, title, text }) => (
          <article 
          key={id} 
          className="bg-white rounded-lg shadow-md flex flex-col items-center" 
          >
            <img src={imageSrc} alt={imageAlt} className="w-full h-32 object-cover rounded-t-2xl" />
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{text}</p>
          </article>
        ))}
      </section>
        </>}
    </main>
  );
}

export default Main;