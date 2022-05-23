import { Films } from "../../Types/Film";

export const FilmCard: React.FC<Films> = ({
  title,
  author,
  imgUrl,
}) => (
  <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imgUrl} alt="Film logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
          </div>

          <div className="media-content">
            <p className="title is-8">{title}</p>
          </div>
        </div>

        <div className="content">
          {author}
        </div>
      </div>
    </div>
  </>
);