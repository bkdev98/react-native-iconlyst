import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsTwoTone = ({
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
      d="M18.494 4.078h-1.59a.417.417 0 0 0-.416.417v3.143c0 .23-.187.417-.417.417h-3.179a.417.417 0 0 0-.417.417v3.277c0 .23-.186.417-.417.417H8.88a.417.417 0 0 0-.417.417v3.077c0 .23-.187.417-.417.417H4.917a.417.417 0 0 0-.417.417v3.011c0 .23.187.417.417.417H12.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.494 4.078h1.589c.23 0 .417.186.417.417v15.01c0 .23-.187.417-.417.417H12.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStairsTwoTone;
