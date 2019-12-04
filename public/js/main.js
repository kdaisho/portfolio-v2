import "../sass/style.scss";
import init from "./modules/init";
import resizeLogo from "./modules/resizeLogo";
import navigation from "./modules/navigation";
import carousel from "./modules/carousel";
import data from "../../data";

document.addEventListener("DOMContentLoaded", () => {
    init();
    resizeLogo();
    navigation();
    carousel(data);
});
