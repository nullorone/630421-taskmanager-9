import {getSearchMarkup} from "./search";
import {getFilterMarkup} from "./filter";
import {getBoardTasksMarkup} from "./board";


const getCombineMainMarkup = () => getSearchMarkup() + getFilterMarkup() + getBoardTasksMarkup();

export {getCombineMainMarkup};

