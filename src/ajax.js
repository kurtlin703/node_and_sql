$(document).ready(() => {
    $("submitButton").click(() => {
        console.log("clicked")
        
        $.ajax({
            url: "single-page-app/",
            type: "get",
            dataType : "json",
            success : (data) => {
                console.log("yes", data)
                $("#status").htnl("all visitors" + data)
            }
        })
})
})