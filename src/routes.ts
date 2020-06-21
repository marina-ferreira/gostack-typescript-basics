import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld((request: Request, response: Response) {
  const user = createUser({
    name: 'Marina',
    email: 'marina@email.com',
    password: '123456',
    techs: ['node', 'react', 'react-native']
  })

  return response.json({ user })
})
