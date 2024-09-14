import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColdDrinkBroken = ({
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
      d="M14.423 21a1.954 1.954 0 0 0 1.947-1.781l.927-10.508c.1-1.142-.8-2.125-1.947-2.125H8.466c-1.134 0-2.03.962-1.948 2.093l.753 10.507A1.955 1.955 0 0 0 9.22 21h2.138"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.954 12.409a4.57 4.57 0 0 1-2.247.572c-.853 0-1.715-.224-2.42-.68a3 3 0 0 1-.356-.249c-.71-.57-1.621-.878-2.545-.923"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.549 16.336 2.239-12.254a1.32 1.32 0 0 1 1.732-1.007l1.968.69"
    />
  </Svg>
);
export default IconlystColdDrinkBroken;
