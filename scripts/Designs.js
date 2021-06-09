import { getDesigns, getColors, getInteriors, getTechnologies, getWheels } from "./database.js";

const colors = getColors();
const interiors = getInteriors();
const technologies = getTechnologies();
const wheels = getWheels();



const buildDesignListItem = (design) => {

    const foundColor = colors.find(
        (color) => {
            return color.id === design.colorId;
        } 
    );



    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === design.interiorId;  
        }
    );

 

    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === design.technologyId;
        }
    );

  
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === design.wheelId;
        }
    );

    let totalCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheel.price;

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });

    return `<li>
        Design #${design.id} costs ${costString}, which was placed and customized on ${new Date(design.timestamp).toLocaleDateString()}.
    </li>`;
};


export const Designs = () => {
  
    const designs = getDesigns();

    let html = "<ul>"

    const listItems = designs.map(buildDesignListItem);
   
    html += listItems.join("")
    html += "</ul>"

    return html;
};