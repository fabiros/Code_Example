//Max 100 Request per hour
const about = { //From Github
    owner: 'fabiros',
    app_id: '29537',
    client_id: 'Iv1.bea248d3eb0e0ef4',
    client_secret: '775413131dfde816c2e51a35ecb6d617971c1634'
};

const btn1 = $('#btn1');
const search1 = $('#search1');

btn1.on("click", () => {
    $.getJSON("https://api.github.com/users/" + search1.val() + "?client_id=" + about.client_id + "&client_secret="+ about.client_secret, function(data) { //Request
        
        // Case Success //
        removeAll('.column > h5'); //Reset Data
        $('#invalidUser1').text(''); //Reset Error Message

        //Append everything
        $('#showName').append('Name: ' + data.name);
        $('#showId').append('ID: ' + data.id);
        console.log('<a href="' + data.url + '"></a>');
        $('#showUrl').append('URL: <a href="' + data.url + '">' + data.url + '</a>');
        $('#showFollowers').append('Followers: ' + data.followers);
        $('#showRepos').append('Repos: ' + data.public_repos);
    })
    .then((res) => console.log(res))
    .fail(function(textStatus, error) { //Error
        const err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
        $('#invalidUser1').text('Failed Search! Please try again');
        removeAll('.column > h5');
    });
});

const removeAll = (input) => { //Removes all data of input element
    for(let i of $(input)) {
        $(input).text('');
    }
};