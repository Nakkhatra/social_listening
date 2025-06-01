window.fbAsyncInit = function() {
  FB.init({
    appId      : 'YOUR_APP_ID', // Replace with your real App ID
    cookie     : true,
    xfbml      : true,
    version    : 'v20.0'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

function statusChangeCallback(response) {
  console.log('Facebook login status:', response);
  const statusDiv = document.getElementById('status');
  if (response.status === 'connected') {
    FB.api('/me?fields=name,email', function(user) {
      statusDiv.innerHTML = `<p>Welcome, ${user.name} (${user.email})!</p>`;
    });
  } else {
    statusDiv.innerHTML = `<p>Please log in with Facebook.</p>`;
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
