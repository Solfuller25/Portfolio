// Fetch call to retrieve profile data from GitHub
const gitHubData = await fetch('https://api.github.com/users/Solfuller25', {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
        Authorization: 'Bearer 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'
    }
}).then(response => response.json()
    .then(data => ({ data: data }))
    .then(res => {
        $('#bio').html(res.data.bio);
        $('#profileImg').attr('src', res.data.avatar_url);
    })
);
