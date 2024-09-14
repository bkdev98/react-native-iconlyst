import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLensShutterTwoTone = ({
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
      d="M16.717 3H8.282C5.342 3 3.5 5.081 3.5 8.026v7.948C3.5 18.919 5.334 21 8.282 21h8.434c2.949 0 4.784-2.081 4.784-5.026V8.026C21.5 5.081 19.665 3 16.717 3"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.914 15.604-1.626-5.016m0 0-2.295-7.08m2.295 7.08 10.115-7.33M21.5 14.217 16.646 10.7v-.01l-4.262-3.074M13.296 21l3.35-10.295v-.01m-1.635 4.923H3.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLensShutterTwoTone;
