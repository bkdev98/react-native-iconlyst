import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeTimeLight = ({
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
      d="M16.656 10.257v-.703c0-2.533-1.45-4.116-4.097-4.116H9.216c-2.606 0-4.024 1.583-4.024 4.116v7.305c0 2.542 1.418 4.117 4.024 4.109h1.087"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.854 5.59v-.8c0-1.299-.741-1.79-2.095-1.79h-1.705c-1.331 0-2.056.491-2.056 1.79v.791M15.93 21a4.12 4.12 0 1 0-.001-8.24A4.12 4.12 0 0 0 15.93 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.233 18.056-1.454-.869v-1.876"
    />
  </Svg>
);
export default IconlystChargeTimeLight;
