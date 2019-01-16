$(".item").click(function(e){
    e.preventDefault()
    $("#menu").animate({
 'marginLeft': '10px',
 'marginTop' : '35px'})
})


$(".site").click(function(e){
    e.preventDefault()
    $("#menu").animate({
        'marginLeft':'-730px',
        'marginTop':'0px'
    })
})

function bold() {
    document.getElementById('content').style.fontWeight = 'bold'
}
function Italic() {
    document.getElementById('content').style.fontStyle = 'italic'
}
function underline() {
    document.getElementById('content').style.textDecoration = "Underline"}
    
function changeFont(font){
        console.log(font.value)
          document.getElementById("content").style.fontFamily = font.value;
      }
function changeSize(fontSize){
        console.log(fontSize.value)
          document.getElementById("content").style.fontSize = fontSize.value;
      }
function like(){
    document.getElementById  ('heart').style.color= "rgb(212, 60, 40)" ;
}
function thank(){
    alert("thanks for sharing!")
}