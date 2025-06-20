import React from 'react'
import { Container, Typography, Divider } from '@mui/material'

const DemoPage = () => {
  return (
    <Container
      style={{
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h3" style={{ padding: '50px' }}>
        Demo
      </Typography>

      <Divider
        style={{
          width: '100%',
          marginTop: '10px',
          marginBottom: '50px',
        }}
      />

      <Typography variant="h5" color="textSecondary">
        Building…
      </Typography>
    </Container>
  )
}

export default DemoPage
