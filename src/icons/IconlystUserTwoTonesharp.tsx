import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserTwoTonesharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M9.764 14.707c3.128-.008 5.787 1.428 6.764 4.519-1.97 1.201-4.29 1.664-6.764 1.658C7.29 20.89 4.97 20.427 3 19.226c.979-3.094 3.633-4.527 6.764-4.52Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M16.335 18.233c1.89.004 3.66-.35 5.165-1.266-.746-2.36-2.777-3.457-5.165-3.451-1.504-.004-2.864.428-3.853 1.337"
      opacity={0.4}
    />
    <Circle
      cx={9.764}
      cy={7.353}
      r={4.237}
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M13.964 5.67a3.241 3.241 0 1 1-.303 4.106"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserTwoTonesharp;
