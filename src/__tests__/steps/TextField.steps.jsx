import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import TextField from '../../components/TextField.tsx'

const textFieldSteps = ({ given: Given, and: And, when: When, then: Then }) => {
  let textFieldComponent

  Given(/^I have TextField component on the page$/, () => {
    textFieldComponent = render(<TextField />)
  })

  When(/^I set the "(.*)" prop to "(.*)"$/, function (prop, state) {
    const props = { ...textFieldComponent.props, [prop]: state }
    textFieldComponent.rerender(<TextField {...props} />)
  })

  And(/^I type "(.*)" into the TextField$/, function (input) {
    fireEvent.change(screen.getByTestId('textField'), {
      target: { value: input }
    })
  })

  Then(/^The TextField should be "(.*)"$/, function (valid) {
    const valiationResult = valid === 'true' ? 'valid' : 'invalid'
    expect(screen.getByTestId('textField')).toHaveClass(valiationResult)
  })

  Then(/^The TextField should be disabled$/, function () {
    expect(screen.getByTestId('textField')).toBeDisabled()
  })

  Then(/^The TextField should be read-only$/, function () {
    expect(screen.getByTestId('textField')).toHaveAttribute('readonly')
  })
}

export default textFieldSteps
