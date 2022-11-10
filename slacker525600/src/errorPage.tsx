/* eslint-disable react/react-in-jsx-scope */
import { useRouteError } from 'react-router-dom'

interface ErrType {
  statusText: string
  message: string
}

declare module 'react-router-dom' {
  function useRouteError (): ErrType
}

export default function ErrorPage (): JSX.Element {
  const error: ErrType = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
        <i>{error.message}</i>
      </p>
    </div>
  )
}
