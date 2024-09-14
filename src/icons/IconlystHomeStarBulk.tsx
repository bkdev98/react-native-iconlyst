import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeStarBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M22.19 9.302 14.664 3.34a3.376 3.376 0 0 0-4.187.002L2.95 9.302a1.001 1.001 0 0 0 1.24 1.569l.127-.1v6.806c0 2.1 1.71 3.809 3.814 3.809h8.879a3.816 3.816 0 0 0 3.814-3.81v-6.805l.126.1a1 1 0 1 0 1.241-1.569"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.476 3.343a3.38 3.38 0 0 1 4.188 0L22.191 9.3a1 1 0 1 1-1.242 1.568l-7.525-5.957a1.38 1.38 0 0 0-1.708 0l-7.525 5.957A1 1 0 1 1 2.949 9.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.093 14.513 1.041-1.008c.375-.349.43-.908.094-1.37a1.04 1.04 0 0 0-.646-.362l-1.45-.2-.655-1.32-.012-.023a1 1 0 0 0-.435-.42.99.99 0 0 0-.764-.072 1.02 1.02 0 0 0-.605.514l-.649 1.308-1.482.217c-.198.035-.384.13-.545.285a1 1 0 0 0-.3.713c0 .27.106.523.306.721l1.057 1.018-.252 1.441c-.036.218 0 .445.106.646.255.475.84.665 1.365.418l1.308-.69 1.284.674a1 1 0 0 0 .638.115 1 1 0 0 0 .664-.395c.16-.214.226-.478.185-.767zM12.57 11.8l.325.656c.136.279.393.48.769.564l.714.1-.506.49a1 1 0 0 0-.3.907l.124.708-.647-.341a1.02 1.02 0 0 0-.946 0l-.656.347.124-.708a1.02 1.02 0 0 0-.293-.906l-.521-.502.704-.103a1 1 0 0 0 .78-.551z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeStarBulk;
