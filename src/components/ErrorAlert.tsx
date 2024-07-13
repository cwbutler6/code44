import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export default function ErrorAlert({ error="" }) {
  return (
    <Alert variant="destructive" className="max-w-lg">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {error}. Please try again later or contact support if the problem persists.
      </AlertDescription>
    </Alert>
  )
}
