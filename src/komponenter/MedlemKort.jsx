import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import client from "../sanityClient";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).fit("crop").auto("format");
}

function MedlemKort({ medlem }) {
  return (
    <div className="medlemkort">
      {medlem.image ? (
        <img
          src={urlFor(medlem.image).width(250).height(180).url()}
          alt={medlem.name}
        />
      ) : (
        <div className="bilde-placeholder">bilde</div>
      )}
      <h3>
        <Link to={`/medlem/${medlem._id}`}>{medlem.name}</Link>
      </h3>
      <a href={`mailto:${medlem.email}`}>{medlem.email}</a>
    </div>
  );
}

export default MedlemKort;
