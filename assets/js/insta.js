$(function () {

    const token = "IGQWRNVC1JbnZA1bHNqTG5KY3F1WFNKbGQxU0ZAZAenRMaFpjRVRXQ0lPWVhQWGhrOHhOMGFiOG9HQ0VnU3E5VGFaSGpZAMTFJd3NHcnFKVm1XRUptTy1GQ1JBNHNvSEJic0VUa1VLUDNCOG1HRWw0YnFwZAFQ4ZAnU0TzAZD";
    const url = "https://graph.instagram.com/me/media?acess_token=" + token + "&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function (response) {
        //console.log('retorno: ', response.data);
        let dadosJson = response.data
        let conteudo = '<div class="row" style="padding-left:5px">';

        for (let p = 0; p < dadosJson.length; p++) {
            let feed = dadosJson[p];
            let titulo = feed.caption !== null ? feed.caption : '';
            let tipo = feed.media_type;
            if(tipo === 'VIDEO') {
                conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-4"><video style="width:100%;height:90%" controls><source src="'+feed.media_url+'" type="video/mp4"></video></div>';
            }
            else if (tipo === 'IMAGE') {
                conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-4"><img style="width:100%;height:90%" title="'+titulo+'" alt"'+titulo+'" src="'+feed.media_url+'" onclick="window.open(\''+feed.permalink+'\');></div>';
            }
        }
        conteudo += '</div>';
        $('#insta').html(conteudo) 
    })

});