// finding element 
const selecetfontsize = document.getElementById("selecetfontsize");
const selectBGcolor = document.getElementById("selectBGcolor");
const selecttTEXcolor = document.getElementById("selecttTEXcolor");
const resetButton = document.getElementById("reset");
const mainElement = document.querySelector("main")




// create a initialSetup functiuon;
const setValues = (SFontColor, SBGColor, STextColor) => {
    selecetfontsize.value = SFontColor;
    selectBGcolor.value = SBGColor;
    selecttTEXcolor.value = STextColor;
    //main option
    mainElement.style.fontSize = SFontColor;
    mainElement.style.backgroundColor = SBGColor;
    mainElement.style.color = STextColor;
}



// lodeLocalStorageValue

const initialSetup = () => {
    const SFontColor = localStorage.getItem("fontsize")
    const SBGColor = localStorage.getItem("BGcolor");
    const STextColor = localStorage.getItem("TEXTcolor");

    if (STextColor && SFontColor && SBGColor) {
        setValues(SFontColor, SBGColor, STextColor);
    }

    if (!SFontColor && !SBGColor && !STextColor) {

        setValues("16px", "aqua", "black");

        {
            /*selecetfontsize.value = "16px";
                              selectBGcolor.value = "aqua";
                              selecttTEXcolor.value = "black";
                              //main option
                              mainElement.style.fontSize = "16px";
                              mainElement.style.backgroundColor = "aqua";
                          mainElement.style.color = "black"; */
        }
    }


    if (SFontColor && !SBGColor && !STextColor) {
        setValues(SFontColor, "aqua", "black");
    }


    if (!SFontColor && SBGColor && !STextColor) {
        setValues("16px", SBGColor, "black");
    }


    if (!SFontColor && !SBGColor && STextColor) {
        setValues("16px", "aqua", STextColor);
    }


    if (!SFontColor && !SBGColor && STextColor) {
        setValues("16px", "aqua", STextColor);
    }


    if (!SFontColor && SBGColor && !STextColor) {
        setValues("16px", SBGColor, "black");
    }


    if (SFontColor && !SBGColor && !STextColor) {
        setValues(SFontColor, "aqua", "black");
    }


    if (SFontColor && !SBGColor && STextColor) {
        setValues(SFontColor, "aqua", STextColor);
    }


    if (!SFontColor && SBGColor && STextColor) {
        setValues("16px", SBGColor, STextColor);
    }

    if (SFontColor && SBGColor && !STextColor) {
        setValues(SFontColor, SBGColor, "black");
    }

}






{ /*function*/ }


// changeFontSize
const changeFontSize = (event) => {
    // console.log(event.target.value);
    const selecetedFontSize = event.target.value;
    mainElement.style.fontSize = selecetedFontSize;
    localStorage.setItem("fontsize", selecetedFontSize)
}

// changeBGcolor
const changeBGcolor = (event) => {
    // console.log(event.target.value);
    const selecetedBGcolore = event.target.value;
    mainElement.style.backgroundColor = selecetedBGcolore;
    localStorage.setItem("BGcolor", selecetedBGcolore);
}

// changeTEXTcolor
const changeTEXTcolor = (event) => {
    // console.log(event.target.value);
    const selecetedTEXTcolore = event.target.value;
    mainElement.style.color = selecetedTEXTcolore;
    localStorage.setItem("TEXTcolor", selecetedTEXTcolore);
}




// changeTEXTcolor >> removeItem
const clearlocalStorage = () => {
    localStorage.removeItem("TEXTcolor");
    localStorage.removeItem("fontsize")
    localStorage.removeItem("BGcolor");
}




// add evebt listener

selecetfontsize.addEventListener("change", changeFontSize);
selectBGcolor.addEventListener("change", changeBGcolor);
selecttTEXcolor.addEventListener("change", changeTEXTcolor);
resetButton.addEventListener("click", clearlocalStorage);



initialSetup();