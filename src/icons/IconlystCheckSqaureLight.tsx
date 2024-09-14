import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckSqaureLight = ({
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
      d="M15.307 3.62H7.453C4.716 3.62 3 5.556 3 8.3v7.4c0 2.742 1.708 4.68 4.453 4.68h7.853c2.746 0 4.455-1.938 4.455-4.68V8.3c0-2.743-1.71-4.68-4.454-4.68"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 5.32c-5.153 2.494-8.3 7.042-9.744 9.752a16.3 16.3 0 0 0-3.527-4.14"
    />
  </Svg>
);
export default IconlystCheckSqaureLight;
