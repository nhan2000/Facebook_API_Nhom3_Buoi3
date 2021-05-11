axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAGYsaHRM0OkmZBjtSx1feLht5RuL7AsR5rM6pyrB5RnY81uTg8Aq0ZAed8vksBXsDxxX4IvuJDu6BEeYWGlF7gvQmZCQBpR1ztf6yUYUns3ZBRn2FAI8q9aFDT59OCTzXswfOVxeRGOulVxM1nRBDnDX8WTPVEdS0gjccQZAxWDoJwwgfnaAZD')
    .then(response => {
        var output = "";
        output += response.data.data[0].message + "<br><br>" + response.data.data[1].message + "<br><br>" + response.data.data[2].message;
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error(error))