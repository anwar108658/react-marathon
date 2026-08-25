import {useParams} from 'react-router-dom'

const User = () => {
  const {id} = useParams()
  console.log("first")
  return (
    <div>User:{id}</div>
  )
}

export default User