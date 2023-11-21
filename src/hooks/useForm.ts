import { useState } from 'react'
import type { ChangeEvent } from 'react'

function useForm (
  initialValues: FormFieldData,
  validate: FieldValidator
): FormHooks {
  const [formFieldData, setFormFieldData] =
    useState<FormFieldData>(initialValues)

  const [formFieldErrors, setFormFieldErrors] = useState<FormFieldErrors>({})

  const updateFormData = (event: InputChangeEvent): void => {
    const { name, value } = event.target
    const updatedData = { ...formFieldData, [name]: value.trim() }

    setFormFieldData(updatedData)
    setFormFieldErrors(validate(updatedData))
  }

  return { formFieldData, formFieldErrors, updateFormData }
}

export type FormFieldData = Record<string, string>
export type FormFieldErrors = Record<string, string>
export type InputChangeEvent = ChangeEvent<HTMLInputElement>
export type FieldValidator = (values: FormFieldData) => FormFieldErrors

export interface FormHooks {
  formFieldData: FormFieldData
  formFieldErrors: FormFieldErrors
  updateFormData: (event: InputChangeEvent) => void
}

export default useForm
