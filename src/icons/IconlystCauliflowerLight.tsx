import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCauliflowerLight = ({
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
      d="M13.982 5.797a3.317 3.317 0 0 1 4.344 4.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.55 5.27a3.977 3.977 0 0 1 7.187 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.604 7.452a3.319 3.319 0 1 0-5.791 3.12M9.765 8.752a2.6 2.6 0 0 1 3.678 0M9.928 11.027c0 .76-.616 1.378-1.377 1.378M16.2 12.264a1.66 1.66 0 0 1 .606 2.266"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.148 13.743A3.315 3.315 0 0 1 5.18 9.136M19.058 9.154a3.315 3.315 0 0 1 1.03 4.546M12.105 20.78c-3.051-2.193-3.53-5.413 0-7.921 3.53 2.508 3.347 5.447 0 7.92"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.756 16.53c.491-1.135 3.44-3.61 6.25-2.543 0 4.524-4.908 7.013-8.901 7.013-3.977 0-8.902-2.532-8.902-7.013 2.81-1.067 5.817 1.408 6.309 2.544"
    />
  </Svg>
);
export default IconlystCauliflowerLight;
