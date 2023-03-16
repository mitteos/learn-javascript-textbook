const getUsers = async (names) => {
    let jobs = []
    for(let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
                if (successResponse.status !== 200) {
                    return null
                } else {
                    return successResponse.json()
                }
            },
            failResponse => {
                return null
            }
        );
        jobs.push(job)
    }
    return await Promise.all(jobs)
}
