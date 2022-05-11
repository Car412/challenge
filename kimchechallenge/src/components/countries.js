import React from "react";
import { useQuery } from "@apollo/client";
import getCountries from "../gql/getCountries";

export default function Countries(){
    const {loading, error, data} = useQuery(getCountries);

    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>Error: </h2>

    return (
        <div>
            <div>
                <form>
                    <label>
                        Search:
                        <input type="text"/>
                    </label>
                </form>
            </div>
            {
                data.countries.map((country, i)=>{
                    return(
                        <div key={i}>
                            <p>{country.name}</p>                              
                                
                            
                        </div>
                    )
                })
            }
        </div>
    )
    

};