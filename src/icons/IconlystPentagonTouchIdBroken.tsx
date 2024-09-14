import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonTouchIdBroken = ({
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
      d="M15.042 3c.598 0 1.172.238 1.595.662l3.953 3.951c.423.423.66.997.66 1.597v5.58c0 .6-.237 1.174-.66 1.597l-3.953 3.951a2.25 2.25 0 0 1-1.595.662H9.46a2.25 2.25 0 0 1-1.597-.662l-3.951-3.951a2.26 2.26 0 0 1-.662-1.597V9.21c0-.6.239-1.174.662-1.597l3.951-3.951A2.26 2.26 0 0 1 9.46 3h2.068"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.995 16.455v-4.223a1.782 1.782 0 1 0-3.565 0v.477M15.951 9.46c.52.738.826 1.638.826 2.608v3.36M8.314 9.834a4.52 4.52 0 0 1 3.937-2.291c.617 0 1.208.123 1.745.347M7.727 15.432v-2.803M10.43 16.456v-1.604"
    />
  </Svg>
);
export default IconlystPentagonTouchIdBroken;
