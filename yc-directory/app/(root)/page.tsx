import SearchForm from "../../components/SearchForm";
import StartupCard from './../../components/StartupCard';

type SearchParams = {
  query?: string;  //? indica que el parámetro es opcional en la URL
}

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  /*
  searchParams es un objeto que contiene los parámetros pasados en la URL (?query=...)
  En este caso, extraes el parámetro query y lo pasas al componente SearchForm como prop,Esto asegura que el estado de la barra de búsqueda esté sincronizado con la URL.
  En la página page.tsx, se está recibiendo searchParams como un prop asíncrono en el servidor. Este objeto es parte del manejo de rutas en Next.js y permite capturar los parámetros de búsqueda directamente desde la URL.
  */
  const query = (await searchParams).query;

  // Fake data - Este puede venir de una api externa/backend/bd
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Daniel' },
      _id: 1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero nec purus porttitor malesuada at non enim. Mauris consectetur dignissim ipsum, id feugiat lorem semper vitae. Sed non purus id neque ultricies consectetur.",
      image: "https://dibujando.net/files/fs/p/c/900x1000/2018/91/ultra2_352893.png",
      category: "Robots",
      title: "We Robots",
    },
  ];
  
  console.log(posts)

  return (
    <>
      {/* Hero - Con barra de busqueda */}
      <section className="pink_container">

        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

        <SearchForm query={query} />
      </section>

      {/* Busqueda y tarjetas */}
      <section className="section_container">
        <p className="text-30-semibold">
          { query ? `Search results for "${query}"` : 'All Startups'}
        </p>
      

        {/* Aquí se renderiza la lista de tarjetas */}
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map( (post: StartupCardType, index: number)  => (
              <StartupCard key={post?._id} post={ post } />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )          }
        </ul>
      </section>   
      
    </>
  );
}

