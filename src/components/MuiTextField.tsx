import { InputAdornment, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

const MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='small' size='small' color='secondary' variant='outlined' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Form input'
          required
          error={!value}
          helperText={!value ? 'required' : 'hi'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <TextField
          label='password'
          type='password'
          helperText='do not share your password with anyone'
          disabled
        />
        <TextField label='readOnly' inputProps={{ readOnly: true }}></TextField>
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField
