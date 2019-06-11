import * as React from 'react'
import { Box } from '../primitives'
import { StyledSystemProps } from '../theme/StyledSystemProps'
import { Label, Input } from './styles'

export type FormGroupProps = StyledSystemProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string
  }

const FormGroup: React.FC<FormGroupProps> = ({ name, onChange, id, label, ...rest }) => {
  return (
    <Box width="100%" mr={rest.mr} ml={rest.ml} mt={rest.mt} mb={rest.mb}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input name={name} id={id} onChange={onChange} />
    </Box>
  )
}

export default FormGroup
