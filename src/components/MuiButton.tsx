import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React, { useState } from 'react'
import { FormatBold } from '@mui/icons-material'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

const MuiButton = () => {
  const [formats, setFormats] = useState<string[] | null>([])
  console.log(formats)

  const hendleFormatChange = (e: React.MouseEvent<HTMLElement>, updateForamts: string[]) => {
    setFormats(updateForamts)
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          secondary
        </Button>
        <Button variant='contained' color='error'>
          error
        </Button>
        <Button variant='contained' color='warning'>
          warning
        </Button>
        <Button variant='contained' color='info'>
          info
        </Button>
        <Button variant='contained' color='success'>
          success
        </Button>
      </Stack>

      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' color='primary' size='small'>
          11
        </Button>
        <Button variant='contained' color='primary' size='medium'>
          medium
        </Button>
        <Button variant='contained' color='primary' size='large' disableElevation>
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant='contained' endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aira-able='sendIcon' color='success' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction='row'>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='aligment button group'
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction='row'>
        <ToggleButtonGroup
          aria-label='text-formtting'
          value={formats}
          onChange={hendleFormatChange}
          color='success'
          orientation='vertical'
          exclusive //하나만 선택
        >
          <ToggleButton value='bold'>
            <FormatBold></FormatBold>
          </ToggleButton>

          <ToggleButton value='italic'>
            <FormatItalicIcon />
          </ToggleButton>

          <ToggleButton value='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton
