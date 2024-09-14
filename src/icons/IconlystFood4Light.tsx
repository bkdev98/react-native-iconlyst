import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood4Light = ({
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
      d="m20.13 17.422-.269.883a2.33 2.33 0 0 1-2.228 1.651H6.368a2.33 2.33 0 0 1-2.228-1.65l-.27-.884m-.87 0h18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.163 5.206a1.163 1.163 0 1 0-2.325 0 1.163 1.163 0 0 0 2.325 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.004 14.773C3.776 10.201 7.421 6.37 12 6.37s8.224 3.832 7.996 8.404"
    />
  </Svg>
);
export default IconlystFood4Light;
