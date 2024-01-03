import "./Album.style.css";
import { Picture } from "./Picture";
import { Button } from "./Button";
export const Album = ({albumName,description,pictures,deleteAlbum,id})=>{
    return (
        <div>
        <h2>{albumName}</h2>
        <p>{description}</p>
      <div className="picturesCont">
      {pictures.map((pic)=>{
                return <Picture {...pic}
                key={pic.id}
                />
            })}
      </div>
      <Button handleClick={deleteAlbum} id={id} btnName="Delete Album" />
    </div>
    )
}