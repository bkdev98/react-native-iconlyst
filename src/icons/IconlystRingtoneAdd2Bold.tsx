import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneAdd2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.956 11.136h-1.207v1.206a.75.75 0 0 1-1.5 0v-1.206H10.04a.75.75 0 0 1 0-1.5h1.209V8.428a.75.75 0 0 1 1.5 0v1.208h1.207a.75.75 0 0 1 0 1.5m.394 6.639a2.353 2.353 0 0 1-2.35 2.35 2.35 2.35 0 0 1-2.35-2.35l-.003-.015h4.705zm5.64-3.982-.466-.99a4.8 4.8 0 0 1-.457-2.043V9.441c0-3.896-3.17-7.066-7.068-7.066a7.074 7.074 0 0 0-7.066 7.066v1.319c0 .702-.159 1.409-.457 2.043l-.466.99a2.77 2.77 0 0 0 .168 2.675 2.77 2.77 0 0 0 2.35 1.292h1.625l-.003.015a3.853 3.853 0 0 0 3.85 3.85 3.854 3.854 0 0 0 3.85-3.85l-.003-.015h1.626c.957 0 1.835-.483 2.349-1.292a2.77 2.77 0 0 0 .169-2.675"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneAdd2Bold;
