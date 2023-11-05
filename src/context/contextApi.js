import React, {createContext, useState, useEffect} from "react";

import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();
const AppContext = (props) =>{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchReasults] = useState(false);
    const [selectCategories, setSelectCategories] = useState(false);
    const [sobileMenu, setMobileMenu] = useState(false);
}
