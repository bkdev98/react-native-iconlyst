import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBerriesLight = ({
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
      d="M7.658 14.028c1.043-2.223 6.046-8.205 10.37-9.51"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.048 15.57c-.96-1.852-2.294-5.776-.432-9.809"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.277 17.386a3.614 3.614 0 1 0 7.229 0 3.614 3.614 0 0 0-7.23 0M3.495 15.731a3.438 3.438 0 1 0 6.875 0 3.438 3.438 0 0 0-6.875 0M6.736 3.908s1.541 3.788 5.68 1.377c-1.934-4.152-5.68-1.377-5.68-1.377"
    />
  </Svg>
);
export default IconlystBerriesLight;
