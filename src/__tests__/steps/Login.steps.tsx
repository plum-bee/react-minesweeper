import React from 'react'
import { expect, afterEach } from '@jest/globals'
import axiosInstance from '../../api/axiosConfig'
import { fireEvent, screen, render, waitFor } from '@testing-library/react'
import LoginForm from '../../pages/Login.tsx'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

interface User {
  name: string
  surname: string
  username: string
  password: string
  email: string
}

let testUser: User = {
  name: 'John',
  surname: 'Doe',
  username: 'johndoe',
  password: 'password123',
  email: 'john.doe@email.com'
}

// beforeEach(async () => {
//   await axiosInstance.delete(`/users/username/${testUser.username}`)
// })

const updateTestUser = (newUser: Partial<User>): User => {
  testUser = { ...testUser, ...newUser }
  return testUser
}

afterEach(async () => {
  await axiosInstance.delete(`/users/username/${testUser.username}`)
})

const renderWithRouter = (ui: any, { route = '/' } = {}): any => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter })
  }
}

const fillInLoginForm = (username: string, password: string): void => {
  const usernameInput = screen.getByTestId('username')
  const passwordInput = screen.getByTestId('password')

  fireEvent.change(usernameInput, { target: { value: username } })
  fireEvent.change(passwordInput, { target: { value: password } })
}

export const loginSteps = ({
  given: Given,
  when: When,
  then: Then
}: {
  given: any
  when: any
  then: any
}): void => {
  Given(/^I am on the login page$/, function () {
    renderWithRouter(<LoginForm />, { route: '/login' })
  })

  Given(
    /^I have a user account with username "(.*)" and password "(.*)"$/,
    async function (username: string, password: string) {
      updateTestUser({ ...testUser, username, password })
      await axiosInstance.post('/users', testUser)
    }
  )

  When(
    /^I enter username "(.*)" and password "(.*)"$/,
    function (username: string, password: string) {
      fillInLoginForm(username, password)
    }
  )

  When(/^I click the "(.*)" button$/, function (buttonName: string) {
    const button = screen.getByTestId(buttonName)
    fireEvent.click(button)
  })

  Then(
    /^I should be redirected to the "(.*)" page$/,
    async function (this: { history: History }, pageName: string) {
      await waitFor(() => {
        const expectedPath = `/${pageName}`
        const currentPath = window.location.pathname
        expect(currentPath).toBe(expectedPath)
      })
    }
  )

  Then(
    /^I should remain on the "(.*)" page$/,
    async function (this: { history: History }, pageName: string) {
      await waitFor(() => {
        const expectedPath = `/${pageName}`
        const currentPath = window.location.pathname
        expect(currentPath).toBe(expectedPath)
      })
    }
  )

  When(
    /^I should see following error message "(.*)"$/,
    function (errorMessage: string) {
      const error = screen.getByTestId('login-error').innerHTML
      expect(error).toBe(errorMessage)
    }
  )
}

export default loginSteps
