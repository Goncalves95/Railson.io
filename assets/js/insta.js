$(function () {

    const token = "IGQWRNTEloNndrRDhrUF9pNjdsNGV0UkJnQ1Vwc2RORWNZAWVR0Mmt1cGlmWGdZAMXZA1cFhhN1NfVm1rZAVhHdkdaeGtDZAktpY3pTbHNRaUZAkMnVYbk52bTVSMjl6VkRHa2VwdkhiaEUtSGMwVzl4OXEyZAnBEMzR2SmMZD";
    const url = `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${token}`;

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