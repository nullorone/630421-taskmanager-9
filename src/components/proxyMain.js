import searchMarkup from "./search";
import filterMarkup from "./filter";
import boardTasksMarkup from "./board";


const getCombineMainMarkup = () => searchMarkup() + filterMarkup() + boardTasksMarkup();

export default getCombineMainMarkup;
