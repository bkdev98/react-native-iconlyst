import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 19.923V4.495a.417.417 0 0 0-.417-.417h-3.178a.417.417 0 0 0-.417.417V7.64c0 .23-.187.417-.417.417h-3.179a.417.417 0 0 0-.417.417v3.276c0 .23-.186.417-.417.417H8.38a.417.417 0 0 0-.417.417v3.078c0 .23-.187.417-.417.417H4.417a.417.417 0 0 0-.417.417v3.01c0 .231.187.418.417.418h8.654"
    />
  </Svg>
);
export default IconlystStairsBroken;
