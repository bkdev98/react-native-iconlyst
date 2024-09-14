import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenReceiveBulk = ({
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
      d="M16.725 14.05c-.64 0-1.23-.16-1.75-.45-.39-.21-.73-.5-1.01-.84-.49-.61-.79-1.39-.79-2.26 0-1.99 1.56-3.55 3.55-3.55.34 0 .67.05.98.14 1.5.41 2.57 1.76 2.57 3.41 0 .2-.02.4-.05.59-.27 1.7-1.71 2.96-3.5 2.96m0-8.6c-.4 0-.79.04-1.16.13l-2.54-1.78c-1.1-.8-2.5-.8-3.6 0l-5.7 4c-.9.7-1.5 1.7-1.5 2.9v5.4c0 1.4.4 2.6 1.3 3.4.9.9 2.1 1.3 3.6 1.3h8.2c1.5 0 2.7-.5 3.6-1.3.8-.8 1.3-2 1.3-3.4v-1.93c.96-.91 1.55-2.21 1.55-3.67 0-2.83-2.22-5.05-5.05-5.05"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.653 10.53a5.06 5.06 0 1 1 5.06 5.061 5.04 5.04 0 0 1-2.998-.984c-.798.595-1.694.893-2.59.893-.9 0-1.8-.3-2.6-.9l-5-4.1q.15-.6.6-1.2l5.4 4.3c.955.756 2.266.8 3.244.101a5.04 5.04 0 0 1-1.116-3.17m5.06-3.561a3.56 3.56 0 1 0 2.993 1.63l-1.887 1.887.43.008a.75.75 0 1 1-.027 1.5l-2.195-.04a.75.75 0 0 1-.737-.737l-.038-2.194a.75.75 0 1 1 1.5-.027l.007.428 1.887-1.886a3.54 3.54 0 0 0-1.932-.57"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailOpenReceiveBulk;
