import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMondayLight = ({
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
    <Circle
      cx={19.141}
      cy={15.523}
      r={1.859}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.455 7.436a1.859 1.859 0 1 1 3.253 1.8l-4.052 7.326a1.859 1.859 0 1 1-3.254-1.799zM7.285 7.436a1.859 1.859 0 1 1 3.253 1.8l-4.052 7.326a1.859 1.859 0 1 1-3.253-1.799z"
    />
  </Svg>
);
export default IconlystMondayLight;
