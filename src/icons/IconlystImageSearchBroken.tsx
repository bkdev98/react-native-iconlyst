import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageSearchBroken = ({
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
      d="m20.995 15.574-3.949-2.867a3.86 3.86 0 0 0-4.816.224l-7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 15.475c.839-.77 2.145-1.999 3.92-1.043a28 28 0 0 1 2.174 1.316M16.222 20.995c2.944 0 4.778-2.077 4.778-5.022V8.028c0-2.945-1.843-5.021-4.778-5.021h-3.324"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12.902v3.073c0 2.944 1.843 5.021 4.788 5.021h4.217M3 6.068a3.063 3.063 0 1 0 1.304-2.507M8.147 8.313 9.69 9.85"
    />
  </Svg>
);
export default IconlystImageSearchBroken;
