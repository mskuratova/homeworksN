import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserStateType} from "./HW3";

type GreetingContainerPropsType = {
    users:UserStateType
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = e.currentTarget.value.trim()

        if (trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else {
            name && setName('')
            setError('name is require!')
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName('')
    }
    const onEnter = (e:KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
