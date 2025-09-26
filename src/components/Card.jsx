
const Card = ({ imageSrc, imageAlt, title, text }) => (
  <article 
    className="bg-white rounded-lg shadow-md flex flex-col items-center p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
  >
    <img src={imageSrc} alt={imageAlt} className="w-full h-32 object-cover rounded-t-lg " />
    <div className="p-4 text-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  </article>
);
export default Card;