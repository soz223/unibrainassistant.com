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

      <Typography variant="h5" color="textSecondary" align="center">
        Below is a demo video of our internal version, including how to upload files, what the system can do, and how to trigger processing.
      </Typography>

      <div style={{ marginTop: '40px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/uGr_NrG68GE"
          title="Internal Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  )
}

export default DemoPage
