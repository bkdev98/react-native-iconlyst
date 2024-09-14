import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallReceiveTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.656 12.846c3.719 3.717 4.824-.845 7.191 1.52 2.284 2.283 3.594 2.739.704 5.63-.363.292-2.664 3.795-10.752-4.291S4.209 5.314 4.5 4.952c2.9-2.899 3.348-1.58 5.632.701 2.366 2.368-2.194 3.476 1.524 7.193"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.477 8.231-4.22.01.01-4.22M16.258 8.241 21.499 3"
    />
  </Svg>
);
export default IconlystCallReceiveTwoTone;
