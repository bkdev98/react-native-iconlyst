import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJupiterLight = ({
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
      strokeWidth={1.5}
      d="M3.114 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.282 12.909c4.867-2.408 12.28 2.555 16.75-4.917M17.722 5.256c-1.007 1.72-4.283 5.509-8.972 3.943-2.512-.84-5.207.377-5.207.377M5.516 5.934c6.417.333 7.083-1.625 9.167-2.584M4.39 16.532s2.763 2.9 6.22 2.036 4.375.473 7.896-4.023c1.414-1.665 2.356-3.595 2.46-3.83M14.884 14.526v.012"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.517 15.618c0 .487-.672.882-1.5.882-.829 0-1.5-.395-1.5-.882s.671-.882 1.5-.882c.828 0 1.5.395 1.5.882"
    />
  </Svg>
);
export default IconlystJupiterLight;
