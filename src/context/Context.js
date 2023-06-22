'use client'
   

import React, { useState, useMemo, useContext } from 'react'

const UserContext = React.createContext()

export function UserProvider({ children }) {

	const [user, setUser] = useState(undefined)
	const [userDB, setUserDB] = useState(undefined)
	const [distributorPDB, setDistributorPDB] = useState(undefined)
	const [productDB, setProduct] = useState(undefined)
	const [item, setItem] = useState(undefined)


	const [success, setSuccess] = useState('')



	const setUserProfile = (data) => {
		setUser(data)
	}


	const setUserData = (data) => {
		setUserDB(data)
	}
	const setUserDistributorPDB = (data) => {
		setDistributorPDB(data)
	}
	const setUserProduct = (data) => {
		setProduct(data)
	}
	const setUserItem = (data) => {
		setItem(data)
	}
	const setUserSuccess = (data) => {
		setSuccess(data)
	}

	const value = useMemo(() => {
		return ({
			user,
			userDB,
			distributorPDB,
			productDB,
			item,
			success,
			setUserProfile,
			setUserData,
			setUserDistributorPDB,
			setUserProduct,
			setUserSuccess,
			setUserItem

		})
	}, [user, userDB, distributorPDB, success, productDB, item])

	return (
		<UserContext.Provider value={value} >
			{children}
		</UserContext.Provider>
	)
}

export function useUser() {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('error')
	}
	return context
}
