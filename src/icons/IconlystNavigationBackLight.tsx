import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationBackLight = ({
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
      d="m4.53 18.05 4.296-3.82a2.32 2.32 0 0 1 3.083 0l4.296 3.82c1.283 1.14.243 3.244-1.442 2.916l-4.074-.792h-.643l-4.073.792c-1.684.328-2.726-1.776-1.443-2.916"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.773 10.676 2.136 2.186 2.134-2.186"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.908 12.86V6.77a3.77 3.77 0 0 0-7.54 0v3.19"
    />
  </Svg>
);
export default IconlystNavigationBackLight;
