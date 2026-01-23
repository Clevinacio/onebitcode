const users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.message) {
        alert("Usuário não encontrado!");
    }
    else {
        users.push(user);
        alert(`O usuário ${user.login} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`);
    }
}
async function showUser(username) {
    const user = users.find((user) => user.login === username);
    if (!user) {
        alert("Usuário não encontrado na lista! Por favor, busque o usuário primeiro.");
        return;
    }
    const response = await fetch(user.repos_url);
    const repos = await response.json();
    let message = `id: ${user.id}\nlogin: ${user.login}\nNome: ${user.name}\nBio: ${user.bio}\nRepositórios:\n\n`;
    repos.forEach((repo) => {
        message += `Nome: ${repo.name}\nDescrição: ${repo.description}\nFork: ${repo.fork}\nEstrelas: ${repo.stargazers_count}\n\n`;
    });
    alert(message);
}
function showAllUsers() {
    let message = "Usuários salvos:\n\n";
    users.forEach((user) => {
        message += `id: ${user.id}\nlogin: ${user.login}\nNome: ${user.name}\nBio: ${user.bio}\nRepositórios públicos: ${user.public_repos}\n\n`;
    });
    alert(message);
}
function showReposTotal() {
    const totalRepos = users.reduce((acc, user) => acc + user.public_repos, 0);
    alert(`Total de repositórios públicos de todos os usuários: ${totalRepos}`);
}
function showTopFive() {
    const topFive = [...users]
        .sort((a, b) => b.public_repos - a.public_repos)
        .slice(0, 5);
    let message = "Top 5 usuários com mais repositórios públicos:\n\n";
    topFive.forEach((user, index) => {
        message += `${index + 1}. ${user.login} - Repositórios públicos: ${user.public_repos}\n`;
    });
    alert(message);
}
async function main() {
    await fetchUser("isaacpontes");
    await fetchUser("julianaconde");
    await fetchUser("pcaldass");
    await fetchUser("lucasqueirogaa");
    await fetchUser("frans203");
    await fetchUser("LeDragoX");
    await showUser("isaacpontes");
    await showUser("julianaconde");
    showAllUsers();
    showReposTotal();
    showTopFive();
}
main();
