import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckSqaureBroken = ({
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
      d="M7.953 20.38c-2.745 0-4.453-1.938-4.453-4.68V8.3c0-2.743 1.716-4.68 4.453-4.68h7.854c2.745 0 4.454 1.937 4.454 4.68v7.4c0 2.742-1.71 4.68-4.455 4.68H11.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 5.32c-5.153 2.494-8.3 7.042-9.744 9.752a16.3 16.3 0 0 0-3.527-4.14"
    />
  </Svg>
);
export default IconlystCheckSqaureBroken;
