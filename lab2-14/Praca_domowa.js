import React, { useEffect, useState, useCallback } from 'react'

const UserInfo = ({ user }) => {
  const { name, email, picture } = user

  const avatar = picture.large
  const displayName = `${name.title} ${name.first} ${name.last}`
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <div>Name: {displayName}</div>
      <div>Email: {email}</div>
    </div>
  )
}

const useFetch = (url) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    doFetch()
  }, [])

  const doFetch = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setResponse(data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [url])

  return { response, error, loading, reload: doFetch }
}

const App = () => {
  const { response, error, loading, reload } = useFetch(
    'https://randomuser.me/api/'
  )

  if (error) {
    return <h4>Something went wrong while data loading...</h4>
  }

  if (loading) {
    return <h4>Data loading....</h4>
  }

  const [user] = response.results

  return (
    <div>
      <UserInfo user={user} />
      <p>
        <button onClick={reload}>Reload</button>
      </p>
    </div>
  )
}

export default App
