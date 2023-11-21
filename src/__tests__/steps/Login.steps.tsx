import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals'
import axios from 'axios'
import { fireEvent, screen, render } from '@testing-library/react'
import LoginForm from '../../pages/Login.tsx'

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
    render(
      <Router>
        <LoginForm />
      </Router>
    )
  })

  Given(
    /^I have a user account with username "(.*)" and password "(.*)"$/,
    async function (username: string, password: string) {
      const user = {
        username,
        password
      }

      const response = await axios.post('http://localhost:3000/users', user)
      expect(response.status).toBe(201) // Created
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
    function (pageName: string) {
      const expectedPath = `/${pageName}`
      const currentPath = window.location.pathname
      expect(currentPath).toBe(expectedPath)
    }
  )

  Then(/^I should remain on the "(.*)" page$/, function (pageName: string) {
    console.log(pageName)
    return true
  })

  When(
    /^I should see the error message "(.*)"$/,
    function (errorMessage: string) {
      const error = screen.getByTestId('username-error').innerHTML
      expect(error).toBe(errorMessage)
    }
  )
}

export default loginSteps
