let SelectorDev = document.getElementById("Developer")
let Dev = document.getElementById("DeveloperValue")
let SelectorEd = document.getElementById("Editor")
let Ed = document.getElementById("EditorValue")
let SelectorGV = document.getElementById("Game_or_Video")
let GV = document.getElementById("GVValue")
ChangeDev()
function ChangeDev() {
    Dev.value = SelectorDev.options[SelectorDev.selectedIndex].value
    Ed.value = SelectorEd.options[SelectorEd.selectedIndex].value
    GV.value = SelectorGV.options[SelectorGV.selectedIndex].value
}