async authorize(credentials) {
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
    })
    const user = await res.json()
    if (res.ok && user) return user
    return null
}