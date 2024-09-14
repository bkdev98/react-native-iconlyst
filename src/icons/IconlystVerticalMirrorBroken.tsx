import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVerticalMirrorBroken = ({
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
      d="m8.892 11.663-2.13-1.708a.431.431 0 0 0-.701.336v3.418c0 .36.418.562.7.336l2.13-1.709a.43.43 0 0 0 0-.673"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.002 8.333v2m0 3.334v2m0 3.333v2m0-18v2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.113 12.337 2.13 1.708a.431.431 0 0 0 .701-.336V10.29a.431.431 0 0 0-.701-.336l-2.13 1.708a.43.43 0 0 0 0 .673"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12.001v4.217C21 19.166 18.919 21 15.974 21H8.026C5.081 21 3 19.157 3 16.218V7.783C3 4.835 5.081 3 8.026 3h7.948C18.919 3 21 4.835 21 7.784v.706"
    />
  </Svg>
);
export default IconlystVerticalMirrorBroken;
