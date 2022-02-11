var client = new window.ka.ClientSDK()
client.autoLoadEvents()
client.setupCallback(
    {
        // fires when collection has finished - this example would not enable the 
        // login button until collection has completed
        'collect-end':
            function(params) {
                // enable login button
                // loginButton = document.getElementById('login_button');
                // loginButton.removeAttribute('disabled');
                // now user can login and navigate away from the page
                console.log(params)
            }, 
        // fires when collection has started. 
        'collect-begin': (params) => {
                // add hidden form element to post session id
                // var loginForm = document.forms['loginForm'];
                // var input = document.createElement('input');
                // input.type = 'hidden';
                // input.name = 'kaId';
                // input.value = params['MercSessId'];
                // loginForm.appendChild(input);
                console.log(params)
                console.log(params['MercSessId'])
            }
    }
)