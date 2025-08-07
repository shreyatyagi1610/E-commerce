import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile({ title }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}user/${localStorage.getItem("userid")}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
        const result = await response.json()
        if (result && result.id) {
          setUser(result)
        } else {
          navigate("/login")
        }
      } catch (error) {
        console.error("Failed to fetch user:", error)
        navigate("/login")
      }
    })()
  }, [navigate])

  if (!user) {
    return <div className="text-center my-5">Loading profile...</div>
  }

  return (
    <div className='row'>
      <div className={title === "checkout" ? 'col-md-12' : 'col-md-6'}>
        {
          user.pic ?
            <img
              src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${user.pic}`}
              alt='Profile'
              className='w-100'
              height={460}
            /> :
            <img
              src='/img/nouser.jpg'
              alt='No user'
              className='w-100'
              height={460}
            />
        }
      </div>

      <div className={title === "checkout" ? 'col-md-12' : 'col-md-6'}>
        <h5 className='bg-primary text-light p-2 text-center'>
          {title === "checkout" ? "Billing Address" : `${title} Section`}
        </h5>

        <table className='table table-bordered table-striped table-primary'>
          <tbody>
            <tr><th>Name</th><td>{user.name || '-'}</td></tr>
            <tr><th>Username</th><td>{user.username || '-'}</td></tr>
            <tr><th>Email</th><td>{user.email || '-'}</td></tr>
            <tr><th>Phone</th><td>{user.phone || '-'}</td></tr>
            <tr><th>Role</th><td>{user.role || '-'}</td></tr>

            {
              title?.toLowerCase() === 'buyer' && (
                <>
                  <tr><th>Address</th><td>{user.address || '-'}</td></tr>
                  <tr><th>Pin</th><td>{user.pin || '-'}</td></tr>
                  <tr><th>City</th><td>{user.city || '-'}</td></tr>
                  <tr><th>State</th><td>{user.state || '-'}</td></tr>
                </>
              )
            }

            <tr>
              <td colSpan={2}>
                <Link to="/update-profile" className='btn btn-primary w-100'>Update Profile</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
