function getData(csrf_token){
    $.post({
        url: "/main/update",
        data: {
            csrfmiddlewaretoken: csrf_token
        },
        success: function(response) { drawGrafics(response['data'], 
            response['labels'], 
            response['consumption']) }
    })
}
