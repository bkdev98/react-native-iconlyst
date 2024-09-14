import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideBrokencurved = ({
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
      d="M4.552 15.726c-.984-1.18-1.557-2.506-1.557-3.722 0-3.28 4.14-7.3 9.25-7.3 2.09 0 4.03.67 5.59 1.71M20.095 8.473c.891 1.13 1.41 2.38 1.41 3.53 0 3.28-4.15 7.3-9.26 7.3-.91 0-1.799-.13-2.63-.36"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.011 14.23a3.12 3.12 0 0 1-.925-2.229 3.16 3.16 0 0 1 3.154-3.166M15.355 12.562a3.16 3.16 0 0 1-2.537 2.542M20.137 4.113 4.363 19.887"
    />
  </Svg>
);
export default IconlystHideBrokencurved;
