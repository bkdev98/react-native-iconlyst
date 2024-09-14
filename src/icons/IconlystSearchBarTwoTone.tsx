import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBarTwoTone = ({
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
      d="M22.5 13.63c0 2.972-1.86 5.073-4.826 5.073H7.327c-2.975 0-4.827-2.1-4.827-5.073v-3.26c0-2.972 1.86-5.073 4.827-5.073h10.346c2.975 0 4.827 2.1 4.827 5.074z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.929 8.905a2.77 2.77 0 1 1 0 5.541 2.77 2.77 0 0 1 0-5.541"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.815 13.704 1.394 1.391"
    />
  </Svg>
);
export default IconlystSearchBarTwoTone;
