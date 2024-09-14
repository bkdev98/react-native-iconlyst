import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFirebaseTwoTone = ({
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
      d="m5.584 17.63 5.697 3.194c.43.24.953.241 1.383.002l5.748-3.195c.522-.29.806-.876.711-1.465l-1.427-8.83a1.418 1.418 0 0 0-2.403-.776L4.957 16.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.263 7.594 13.258 5.68a1.418 1.418 0 0 0-2.51 0L4.913 16.787"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.584 17.63a1.42 1.42 0 0 1-.708-1.455l1.872-11.98a1.418 1.418 0 0 1 2.655-.443l1.182 2.239"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFirebaseTwoTone;
