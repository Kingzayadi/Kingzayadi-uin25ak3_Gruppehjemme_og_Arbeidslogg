import { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import MedlemKort from "../komponenter/Medlemkort";

function Hjem() {
  const [medlemmer, setMedlemmer] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "medlemmer"]{
        _id,
        name,
        email,
        image,
        interests,
        bio,
        log
      }`)
      .then((data) => setMedlemmer(data))
      .catch(console.error);
  }, []);

  // Samler alle loggoppføringer
  const samletLogg = medlemmer.flatMap((medlem) =>
    medlem.log?.map((entry) => ({
      name: medlem.name,
      date: entry.date,
      oppgave: entry.oppgave,
    })) || []
  );

  return (
    <div className="hjem-side">
      <h2>Gruppemedlemmer</h2>
      <div className="kort-container">
        {medlemmer.map((medlem) => (
          <MedlemKort key={medlem._id} medlem={medlem} />
        ))}
      </div>

      <h2 style={{ marginTop: "3rem" }}>Arbeidslogg</h2>
      <table className="log-table">
        <thead>
          <tr>
            <th>Dato</th>
            <th>Navn</th>
            <th>Oppgave</th>
          </tr>
        </thead>
        <tbody>
          {samletLogg
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // nyeste øverst
            .map((entry, index) => (
              <tr key={index}>
                <td>{new Date(entry.date).toLocaleDateString()}</td>
                <td>{entry.name}</td>
                <td>{entry.oppgave}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Hjem;
