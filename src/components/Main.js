import React from "react";
import Link from "./Link";
import languages from '../json/languages.json';

const Main = () => {
  if (Object.keys(languages).length > 0) {
    return (
      <main className="fade-in">
        <div id="main-section">        
        {Object.keys(languages).map((key, index) =>
            <Link key={index} name={key} image={languages[key].image} link={languages[key].link} />
        )}
        </div>
      </main>
    )
  }  
}

export default Main;
