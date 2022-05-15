import React from "react";

export default function Pagination({countriesPerPage, allCountries, paginado}){
    const pageNumbers = []

    for(let i = 1; i <=Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
            <div>
                {pageNumbers && pageNumbers.map((number)=>{
                    return(
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a key={number} onClick={()=>paginado(number)}>
                    {number}
                    </a>
                )})}
           </div>
        </nav>
    )
}