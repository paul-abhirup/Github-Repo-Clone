class Github {
    constructor(){
        this.client_id = 'a840155a0c0a014be90b';
        this.client_secret = 'c691c5e30693876f730c85e1ef93babaf0ba94d0';
        // this.client_secret = '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 ';

        this.repos_count   = 10;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        
        const profileResponse = await  fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const reposResponse = await  fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}
