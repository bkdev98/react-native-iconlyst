import React, { useContext } from 'react'
import { type IconlystProps, IconlystContext } from '../lib'

import IconComponent from '../icons/IconlystBarChart4LineTwoTone'

function IconlystBarChart4LineTwoTone({ color, size, style, mirrored, ...props }: IconlystProps) {
  const {
    color: contextColor = 'currentColor',
    size: contextSize = 24,
    mirrored: contextMirrored = false,
    style: contextStyle,
  } = useContext(IconlystContext)

  const mirroredValue = mirrored ?? contextMirrored

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={[
        contextStyle,
        style,
        {
          ...(mirroredValue && {
            transform: [{ scaleX: -1 }],
          }),
        },
      ]}
      {...props}
    />
  )
}

export default IconlystBarChart4LineTwoTone
