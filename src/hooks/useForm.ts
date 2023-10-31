import { useState } from 'react'
import type { ChangeEvent } from 'react'

type FormFieldData = Record<string, string | number>
type FormFieldErrors = Record<string, string>
type InputChangeEvent = ChangeEvent<HTMLInputElement>
type FieldValidator = (values: FormFieldData) => FormFieldData

interface FormHooks {
  formFieldData: FormFieldData
  formFieldErrors: FormFieldErrors
  updateFormData: (event: InputChangeEvent) => void
}

function useForm (
  initialValues: FormFieldData,
  validate: FieldValidator
): FormHooks {
  const [formFieldData, setFormFieldData] =
    useState<FormFieldData>(initialValues)
  const [formFieldErrors, setFieldErrors] = useState<FormFieldErrors>({})

  const updateFormData = (event: InputChangeEvent): void => {
    const { name, value } = event.target
    const updatedData = { ...formFieldData, [name]: value.trim() }

    setFormFieldData(updatedData)
    setFieldErrors(validate(updatedData) as FormFieldErrors)
  }

  return { formFieldData, formFieldErrors, updateFormData }
}

export default useForm
