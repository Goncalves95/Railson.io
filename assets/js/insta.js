// Replace with your Instagram Access Token
const accessToken = 'GQWROUTZAadFd2WTE2Ry1LZAlpjcEE2dGdxSFFaSmMzNExkOTZAGVW1LRXUtUFY3c3BmWmlVaER1UWJJV1c2ZA1I1Tnk1c19WSVRhNVpkN3BGZA040SF9EcDFlLWdrdmItT2p0LWIzMWo4d0pyQmM4R3JYeUdMNVlveGMZD';

// Function to fetch and display Instagram feed
function getInstagramFeed() {
    fetch(`https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            const feedContainer = document.getElementById('instagram-feed');

            data.data.forEach(post => {
                const postLink = document.createElement('a');
                postLink.href = post.permalink;
                postLink.target = '_blank';

                const postImage = document.createElement('img');
                postImage.src = post.media_url;
                postImage.alt = post.caption;

                postLink.appendChild(postImage);
                feedContainer.appendChild(postLink);
            });
        })
        .catch(error => console.error(error));
}

// Call the function to fetch and display the Instagram feed
getInstagramFeed();