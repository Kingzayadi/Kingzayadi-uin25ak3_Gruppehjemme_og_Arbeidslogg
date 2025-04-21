import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function PersonProfil() {
  const { id } = useParams();
  const [medlem, setMedlem] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "medlemmer" && _id == "${id}"][0]`)
      .then((data) => setMedlem(data))
      .catch(console.error);
  }, [id]);

  if (!medlem) return <p>Laster profil...</p>;

  return (
    <div className="profil-side">
      <div className="profil-innhold">
        <div className="profilbilde-wrapper">
          {medlem.image && (
            <img
              src={urlFor(medlem.image).width(400).height(300).url()}
              alt={medlem.name}
              className="profilbilde"
            />
          )}
        </div>

        <div className="profil-info">
          <h2>{medlem.name}</h2>
          <p>{medlem.bio}</p>

          <h3>Interesser</h3>
          <ul>
            {medlem.interests?.map((interesse, i) => (
              <li key={i}>{interesse}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3>Arbeidslogg</h3>
      <table className="log-table">
        <thead>
          <tr>
            <th>Dato</th>
            <th>Oppgave</th>
          </tr>
        </thead>
        <tbody>
          {medlem.log?.map((entry, i) => (
            <tr key={i}>
              <td>{new Date(entry.date).toLocaleDateString()}</td>
              <td>{entry.oppgave}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonProfil;
