import SearchForm from "../../components/SearchForm";

export default async function Home( { searchParams }: { searchParams: Promise<{ query?: string }> } )
{
  /*
  searchParams es un objeto que contiene los parámetros pasados en la URL (?query=...)

  En este caso, extraes el parámetro query y lo pasas al componente SearchForm como prop,Esto asegura que el estado de la barra de búsqueda esté sincronizado con la URL.

  En la página page.tsx, se está recibiendo searchParams como un prop asíncrono en el servidor. Este objeto es parte del manejo de rutas en Next.js y permite capturar los parámetros de búsqueda directamente desde la URL.
  
  */  
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

        <SearchForm query ={ query } />

      </section>

    </>
  );
}

