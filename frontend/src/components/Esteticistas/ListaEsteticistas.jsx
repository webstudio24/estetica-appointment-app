import EsteticistaCard from "./EsteticistaCard";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const ListaEsteticistas = () => {
  const {
    data: esteticistas,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/esteticistas`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {esteticistas.map((esteticista) => (
            <EsteticistaCard key={esteticista._id} esteticista={esteticista} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListaEsteticistas;
