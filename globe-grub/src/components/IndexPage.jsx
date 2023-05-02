import Geo from "./Geo";
import Search from "./Search";
import ResultContainer from "./ResultContainer";
import Ad from "./Ad";
import React, { useState } from "react";
import { useSearchResult } from "../hooks/useSearchResult";
import Recommendations from "./Recommendations";

export default function IndexPage() {

   const data = useSearchResult((state) => state.searchResult);
   const title = useSearchResult((state)=> state.title);
  return (
    <>
      <section className="geosearch flex-center background-secondary max-width-container">
        <Geo/>
        <Search/> 
      </section>
      <Ad /> 
      {data == ""
      ?<>
 
        <Recommendations></Recommendations>
        <Recommendations></Recommendations>
        <Recommendations></Recommendations>
        <Recommendations></Recommendations>
      </>
      
    : <>
      <ResultContainer data={data} title={title}/>; {/*data från Search.jsx(data från sökningen) hamnar i resultcontainer */}
    </>
    }
      <Ad />
    </>
  );
}
