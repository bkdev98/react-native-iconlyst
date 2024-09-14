import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuoraTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.936 17.698c-.041 2.385-1.114 4.058-3.604 4.17-1.361.06-2.982-.693-4.02-3.585-.849-2.361-1.366-3.3-3.808-3.412l-.302-.903c2.277-1.565 5.387-1.296 6.744 2.85 1.16 3.543 4.61 1.9 4.99.88"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.88 12.03a7 7 0 0 1-.015-.453c0-3.005 1.9-5.44 4.244-5.44s4.244 2.435 4.244 5.44c1.28.93 1.87 1.606 2.634 3.175a7.8 7.8 0 0 0 .668-3.174c0-4.256-3.379-7.707-7.546-7.707s-7.545 3.45-7.545 7.707 3.378 7.707 7.546 7.707"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystQuoraTwoTone;
