// import DOMEDITOR from "./DOMEDITOR.js";
class NewFrame {

    static add_click() {
        console .log("peeeeee")

    }

    static render_window(){
        
        let canvas = document.getElementById("canvas")

        // 0 = POPUPWINDOW
        // 1 = TXTBOX
        // 2 = CHECKBUTTON

        let window_taglines = [
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("input"),
            document.createElement("i")
        ]

        let attribute = [
            "tmp__addWindow", 
            "tmp__addWindow__top", 
            "tmp__addWindow__btm", 
            "tmp__addWindow__txtBox", 
            "fas fa-check"
        ]

        let j = 0
        for (let i = 0; i < attribute.length; i++){
            
            window_taglines[i].setAttribute("class", attribute[i])
            
            // Tag[1 and 2]
            
            if (i!= 0){
                if(i < 3)
                window_taglines[0].insertBefore(window_taglines[i], null)
                else
                j += 1
                window_taglines[j].insertBefore(window_taglines[i], null)
            }
        }
        window_taglines[3].setAttribute("placeholder", "Enter URL")
        window_taglines[4].setAttribute("id", "add__newFrame")

        let ADDFRAME = window_taglines[4]

        canvas.insertBefore(window_taglines[0], null)

        ADDFRAME.onclick = function(){

            // Creates a new element for the video
            let frame = document.createElement("IFRAME")
            
            // YOUTUBE URL STRING MANIP
            let url = window_taglines[3].value

        
            // TODO: EDIT URL W/ REGEX

            frame.setAttribute("src", url)
            
            let canvas = document.getElementById("canvas")
            canvas.insertBefore(frame, null)
            console.log(url)

            window_taglines[0].remove()
            
        }



        console.log("pwet")
    }


}

export default NewFrame