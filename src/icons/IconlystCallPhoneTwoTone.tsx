import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallPhoneTwoTone = ({
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
      d="M19.813 19.98c2.939-2.938 1.606-3.402-.715-5.722-2.406-2.404-3.53 2.234-7.308-1.544-3.78-3.778.855-4.905-1.55-7.311-2.32-2.318-2.777-3.66-5.723-.713"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.814 19.98c-.37.296-2.708 3.856-10.929-4.362S4.221 5.058 4.517 4.689"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCallPhoneTwoTone;
