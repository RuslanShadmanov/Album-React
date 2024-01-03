import { Button } from "./Button"
export const Header= ({numOfAlbum,numOfPics,renderAlbums,isShowAlbums})=>{
    return <div>
     <p>Welcome to my profile. I have {numOfAlbum} albums and {numOfPics} pictures
    </p>
    <Button btnName={ isShowAlbums ? "Hide Albums" : "Show Albums"} handleClick={renderAlbums}/>
    </div>
}




