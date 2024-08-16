
let mypage = `
<h1>Visszajelzés</h1>

        <input class="subject" type="text" placeholder="Tárgy" />

        <textarea placeholder="Megjegyzés"></textarea>
            
        <div class="checkbox-div">
            <div class="checkbox-checkbox"><input type="checkbox" /></div>
            <div class="label-div"><label>Elolvastam és elfogadom az <span>Adatkezelési Tájékoztatót</span>.</label></div>
        </div>

        <div class="checkbox-div">
            <div class="checkbox-checkbox"><input type="checkbox" /></div>
            <div class="label-div"><label>Szeretnék hírlevelet kapni.</label></div>
        </div>

        <div class="button-container"><button>Mentés</button></div>
`

document.querySelector("#root").innerHTML = mypage