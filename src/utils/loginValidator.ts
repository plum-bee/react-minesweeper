import type { FormFieldData, FormFieldErrors } from '../hooks/useForm'

export const validateLogin = (fieldsData: FormFieldData): FormFieldErrors => {
  const errors: FormFieldErrors = {}

  if (fieldsData.email === '') {
    errors.email = 'Email is required'
  } else if (!/\S+@gmail.com\S+\.\S+/.test(fieldsData.email)) {
    errors.email = 'Email is invalid'
  }

  return errors
}
