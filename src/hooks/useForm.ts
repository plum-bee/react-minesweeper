import { useReducer } from 'react'

type Action =
  | { type: 'SET_FIELD'; payload: { name: string; value: string } }
  | { type: 'RESET_FORM' }

interface State {
  [key: string]: string
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.payload.name]: action.payload.value }
    case 'RESET_FORM':
      return {}
    default:
      return state
  }
}

const useForm = (initialValues: State) => {
  const [formData, dispatch] = useReducer(reducer, initialValues)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    dispatch({ type: 'SET_FIELD', payload: { name, value } })
  }

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' })
  }

  return { formData, handleChange, resetForm }
}

export default useForm
