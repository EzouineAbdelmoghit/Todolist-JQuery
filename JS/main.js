






$(document).ready(function(){
$("#add-btn").click(function(){
    if($("#input").val()!=""){
        var time=new Date()
        console.log(time.toLocaleDateString())
        var div = $("<div></div>")
        var p1 = $("<p></p>").text($("#input").val())
        var p2 = $("<p></p>").text(time.toLocaleString())
        var btn= $("<button></button>").text("delete")
        var check= $("<input></input>").attr("type","checkbox")
        div.addClass("task")
        p1.addClass("text")
        p2.addClass("text2")
        check.click(function(e){
            console.log(e.target.checked);
            if(!e.target.checked)
                $(e.target).parent().children("p.text").css("text-decoration","none")
            else{
                $(e.target).parent().children("p.text").css("text-decoration","line-through")
            }
        })
        div.append(p1,p2,btn,check)
        $("#input").val("")
        $(".Task-box").append(div)
        btn.click(function(event){
            console.log($(event.target).parent())
            $(event.target).parent().remove()
        })
        }

})
    });