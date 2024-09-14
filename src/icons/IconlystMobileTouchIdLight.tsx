import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileTouchIdLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.13 3.621h-.81A3.62 3.62 0 0 0 4.7 7.241l.001 10.763a3.62 3.62 0 0 0 3.618 3.617h5.515a3.62 3.62 0 0 0 3.618-3.618l-.001-4.464M12.236 5.533a3.774 3.774 0 0 1 4.74-1.622M18.61 5.219a3.76 3.76 0 0 1 .688 2.175v2.805M16.976 10.158V7.535a1.487 1.487 0 1 0-2.974 0v.398M14.002 11.057V9.72m-2.256-.39V7.863z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.076 17.887v-.063zm-.26-.013a.261.261 0 1 1 .523 0 .261.261 0 0 1-.523 0"
    />
  </Svg>
);
export default IconlystMobileTouchIdLight;
