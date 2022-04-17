import image_404 from "../assets/404.svg"

export default function NotFound(){
    return(
        <div style={{display: "flex", justifyContent : "center",alignItems: "center"}}>
        <img src={image_404} style={{ paddingTop:"10rem", width : "30rem", height : "30rem"}} alt="error"></img>
        </div>
    )
}