(function (window) {
    fetch("https://api.github.com/users/johngideonsenga")
        .then(response => {
            return response.json()
        })
        .then(response => {
            if (response.login) {
                var avatar = document.getElementById("gitAvatar")
                var username = document.getElementById("gitUsername")
                var repos = document.getElementById("gitRepos")
                var following = document.getElementById("gitFollowing")
                var followers = document.getElementById("gitFollowers")
                avatar.src = response.avatar_url;
                username.innerHTML = response.login
                repos.innerHTML = response.public_repos
                following.innerHTML = response.following
                followers.innerHTML = response.followers
            }
        })
        .catch(error => alert(error));
})(window);