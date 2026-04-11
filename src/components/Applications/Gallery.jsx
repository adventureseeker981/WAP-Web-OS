import "./Gallery.css"
import { useState } from "react";

export function Gallery() {
    const [images, setImages] = useState([]);

        // Fetch images from API
        fetch("https://picsum.photos/v2/list")
            .then((res) => res.json())
            .then((data) => {
                setImages(data);
            });

        // Make gallery draggable
        const element = document.getElementById("gallery-window");
        if (element) {
            dragElement(element);
        }


    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return (
        <div className="gallery-window" id="gallery-window">
            <div className="gallery-windowheader" style={{background: "grey", height: "800px", width: "800px", padding: "20px", paddingTop: "30px"}}>
                {images.slice(11, 20).map((image, index) => (
                    <img key={image.id} src={image.download_url} alt={`Gallery image ${index + 1}`} className={"images"}/>
                ))}
            </div>
        </div>
    )
}





