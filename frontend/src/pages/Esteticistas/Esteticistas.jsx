import EsteticistaCard from "../../components/Esteticistas/EsteticistaCard";
import { esteticistas } from "../../assets/data/esteticistas";
import Testimonial from "../../components/Testimonial/Testimonial";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";

const Esteticistas = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());

    console.log("handle search");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: esteticistas,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/esteticistas?query=${debounceQuery}`);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Encontrar esteticistas</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Buscar esteticista por nombre"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section>
        {loading && <Loader />}
        {error && <Error />}
        <div className="container">
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {esteticistas.map((esteticista) => (
                <EsteticistaCard
                  key={esteticista.id}
                  esteticista={esteticista}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              ¿Qué opinan nuestros clientes?
            </h2>
            <p className="text__para text-center">
              Servicios estéticos para todos los tipos de piel.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Esteticistas;
