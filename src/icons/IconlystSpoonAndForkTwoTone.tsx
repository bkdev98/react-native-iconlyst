import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpoonAndForkTwoTone = ({
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
      d="M17.605 12.7V21m0-8.3c-1.875 0-3.394-1.738-3.394-3.88 0-3.214 1.52-5.82 3.395-5.82S21 5.606 21 8.82c0 2.142-1.52 3.88-3.395 3.88"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.204 3.024 4 8.234a3.243 3.243 0 0 0 6.487 0l-.203-5.21M7.244 11.477V21M7.244 7.806V3.024"
    />
  </Svg>
);
export default IconlystSpoonAndForkTwoTone;
