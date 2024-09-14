import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeTimeBroken = ({
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
      d="M9.803 20.968H8.716c-2.606.008-4.024-1.567-4.024-4.11v-4.152M16.156 10.257v-.703c0-2.533-1.45-4.116-4.097-4.116H8.716c-2.606 0-4.024 1.583-4.024 4.116"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.354 5.59v-.8c0-1.299-.741-1.79-2.095-1.79H9.554c-1.331 0-2.056.491-2.056 1.79v.791M19.55 16.88a4.12 4.12 0 1 0-.686 2.277"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.733 18.056-1.454-.869v-1.876"
    />
  </Svg>
);
export default IconlystChargeTimeBroken;
