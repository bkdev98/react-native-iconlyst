import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereLight = ({
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
      d="M20.441 18.008c-3.99 3.99-10.459 3.99-14.449 0s-3.99-10.46 0-14.45"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.441 18.008c-1.596 1.596-6.124-.345-10.115-4.335-3.99-3.99-5.93-8.518-4.334-10.114s6.124.344 10.114 4.335 5.931 8.518 4.335 10.114"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHemisphereLight;
