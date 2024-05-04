import { Box, Typography, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyBasketTotal = () => {
  return (
    <Box textAlign="center">
      <Typography variant='h4'>
        You have no items in your shopping card, <Link to="/"> Do you want add one?</Link>
      </Typography>
    </Box>
  )
}

export default EmptyBasketTotal