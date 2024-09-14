import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonTouchIdLight = ({
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
      d="M14.792 3.959H9.21c-.599 0-1.174.237-1.597.662L3.662 8.572A2.26 2.26 0 0 0 3 10.169v5.58c0 .6.239 1.174.662 1.597l3.951 3.951c.423.424.998.662 1.597.662h5.582c.598 0 1.172-.238 1.595-.662l3.953-3.951c.423-.423.66-.997.66-1.597v-5.58c0-.6-.237-1.174-.66-1.597l-3.953-3.951a2.25 2.25 0 0 0-1.595-.662"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.745 17.414v-4.223a1.782 1.782 0 1 0-3.565 0v.477M15.701 10.42c.52.737.826 1.637.826 2.607v3.36M8.064 10.793a4.52 4.52 0 0 1 3.937-2.291c.617 0 1.208.123 1.745.347M7.477 16.39v-2.802M10.18 17.415V15.81"
    />
  </Svg>
);
export default IconlystPentagonTouchIdLight;
