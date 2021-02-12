function getData(csrf_token, id){
    $.post({
        url: "/sections/update/" + String(id),
        data: {
            csrfmiddlewaretoken: csrf_token
        },
        success: function(response) { drawGistogram(response['data'], 
            response['labels'], 
            response['consumption']) }
    })
}
