import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UsersContainer ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
    //eslint-disable-next-line
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h1 className='text-center'>Customer List</h1>
      <div className='ms-4'>
        {userData && userData.users && userData.users.map(user => 
        <div key={user.id}>
          <h3>{user.name}</h3>
          <span style={{marginLeft: "50px"}}>Email: {user.email}</span><br />
          <span style={{marginLeft: "50px"}}>Phone: {user.phone}</span>
        </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
