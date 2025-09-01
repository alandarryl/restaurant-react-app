import food13 from "../assets/food13.jpg";
import food14 from "../assets/food14.jpg";
import food15 from "../assets/food15.jpg";
import food16 from "../assets/food16.jpg";
import food17 from "../assets/food17.jpg";
import food19 from "../assets/food19.jpg";
import food20 from "../assets/food20.jpg";

function Gallery(){
    return (

    <section class="gallery" id="gallery" >

        <div class="heading" >
            <span>our gallery</span>
            <h3>our untold stories</h3>
        </div>

        <div class="gallery-container" >

            <a href={food13} class="box" >
                <img src={food13} />
                <div class="icon" > <i class="fas fa-plus" ></i> </div>
            </a>

            <a href={food14} class="box" >
                <img src={food14} />
                <div class="icon" > <i class="fas fa-plus" ></i> </div>
            </a>
            
            <a href={food15} class="box" >
                <img src={food15} />
                <div class="icon" > <i class="fas fa-plus" ></i> </div>
            </a>
            
            <a href={food16} class="box" >
                <img src={food16} />
                <div class="icon" > <i class="fas fa-plus" ></i> </div>
            </a>
            
            <a href={food17} class="box" >
                <img src={food17} />
                <div class="icon" > <i class="fas fa-plus" ></i> </div>
            </a>
            
            <a href={food19} class="box" >
                <img src={food19} />
                <div class="icon" > <i class="fas fa-plus" ></i> </div>
            </a>

        </div>

    </section>
    )
}


export default Gallery;