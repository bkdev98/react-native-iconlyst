import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUltravioletCircleOutline = ({
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
      d="M12.614 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.864 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.614 8.222a.75.75 0 0 1 .75.75v4.165a1.14 1.14 0 0 0 2.281 0V8.972a.75.75 0 0 1 1.5 0v4.165a2.64 2.64 0 0 1-5.28 0V8.972a.75.75 0 0 1 .75-.75M17.852 8.26a.75.75 0 0 1 .474.95l-2.015 6.055a.75.75 0 0 1-1.423 0l-2.014-6.056a.75.75 0 0 1 1.423-.473l1.303 3.916 1.303-3.916a.75.75 0 0 1 .949-.475"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUltravioletCircleOutline;
