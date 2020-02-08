
const input=document.getElementById("searchuser")
const client_id="e85bf236bb3c81cf5ab1"
const client_secret="c33c79d22c7543fa81dc23e5712539b9f4dbb81a"

input.addEventListener("keyup",getdata)

   async function getdata(e) {
  console.log(e.target.value);
  if (e.target.value != "") {
    const profile =
     await fetch(`https://api.github.com/users/${e.target.value}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const Repository = 
    await fetch(`https://api.github.com/users/${e.target.value}/repos?per_page=${5}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const data = await profile.json();
    const repo = await Repository.json();
    console.log(data)
    console.log(repo)

    document.getElementById("img").innerHTML = `<img src="${data.avatar_url}" width="250px"  />
                                                <a href="${data.html_url}" class="btn btn-primary btn-block  mt-5 mb-4">More Detail</a>`;
    document.getElementById("info").innerHTML = ` <span class="badge badge-primary">Public Repository: ${data.public_repos}</span>
                                                <span class="badge badge-secondary">Public Gists: ${data.public_gists}</span>
                                                 <span class="badge badge-success">Followers: ${data.followers}</span>
                                                 <span class="badge badge-info">Following: ${data.following}</span>`;

    document.getElementById("details").innerHTML = `<ul class="list-group mt-4">
                                                      <li class="list-group-item">Name : ${data.name}</li>
                                                     <li class="list-group-item">Company : ${data.company}</li>
                                                     <li class="list-group-item">Blog: ${data.blog}</li>
                                                     <li class="list-group-item">Location : ${data.location}</li>
                                                    <li class="list-group-item">Member Since : ${data.created_at}</li>
                                                    </ul>`;        

    console.log(repo);

    let output = `<h2 class="page-heading m-3">Latest Repository</h2>`;

    repo.forEach(function(repos) {
      output += `
          
          <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repos.html_url}" target="_blank">${repos.name}</a>
              </div>
              <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repos.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repos.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repos.forms_count}</span>
              </div>
            </div>
          </div>`;
    });

    
    document.getElementById("rep").innerHTML = `${output}</ul>`;
  } else {
    document.getElementById("img").innerHTML = "";
    document.getElementById("info").innerHTML = "";
    document.getElementById("details").innerHTML = "";
    document.getElementById("rep").innerHTML = "";
  }
}
       
    



