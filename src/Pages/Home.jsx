import { useState, ChangeEvent } from 'react';


//Styles
import '../sass/Home.scss';
import { usePokemon } from '../hooks/usePokemon';

export const Home = () => {
  const { isLoading, pokemons } = usePokemon();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredPokemons = () => {
    if (search.length === 0)
      return pokemons.slice(currentPage, currentPage + 5);

    // Si hay algo en la caja de texto
    const filtered = pokemons.filter((poke) => poke.name.includes(search));
    return filtered.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (
      pokemons.filter((poke) => poke.name.includes(search)).length >
      currentPage + 5
    )
      setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 5);
  };

  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  return (
    <div className='container-box'>
      <h1 className='title-head'>Listado de Pokémons</h1>
      <hr />
      <input
        type='text'
        className='mb-2 form-control'
        placeholder='Buscar Pokémon'
        value={search}
        onChange={onSearchChange}
      />

      <table className='table'>
        <thead>
          <tr>
            <th style={{ width: 100 }}>ID</th>
            <th style={{ width: 150 }}>Nombre</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {filteredPokemons().map(({ id, name, pic }) => (
            <tr key={id}>
              <td> {id} </td>
              <td> {name} </td>
              <td>
                <img src={pic} alt={name} style={{ height: 75 }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className='btns'>
        <button className='btn btn-primary' onClick={prevPage}>
          <span class='material-symbols-outlined'>arrow_back</span>
        </button>
        &nbsp;
        <button className='btn btn-primary' onClick={nextPage}>
          <span class='material-symbols-outlined'>arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
