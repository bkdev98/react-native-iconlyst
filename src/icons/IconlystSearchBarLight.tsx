import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBarLight = ({
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
      d="M22 13.63c0 2.972-1.86 5.073-4.826 5.073H6.827C3.852 18.703 2 16.603 2 13.63v-3.26c0-2.972 1.86-5.073 4.827-5.073h10.346c2.975 0 4.827 2.1 4.827 5.074z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.429 8.905a2.77 2.77 0 1 1 0 5.541 2.77 2.77 0 0 1 0-5.541"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.314 13.704 1.395 1.391"
    />
  </Svg>
);
export default IconlystSearchBarLight;
