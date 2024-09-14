import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReactNativeLight = ({
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
      d="M6.977 9.098C4.578 9.726 3 10.792 3 12.002c0 1.933 4.03 3.5 9 3.5q1.018-.002 1.97-.087"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.029 15.411a23 23 0 0 1-1.06-1.663C6.482 9.443 5.824 5.17 7.498 4.204c1.047-.605 2.758.227 4.5 1.988"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.972 14.903c-.653 2.39-.518 4.287.528 4.891 1.674.967 5.046-1.74 7.531-6.044.34-.587.64-1.172.91-1.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.805c1.743 1.761 3.453 2.593 4.5 1.988 1.674-.966 1.016-5.24-1.469-9.544a23 23 0 0 0-1.06-1.663"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.028 14.903C19.424 14.274 21 13.21 21 12c0-1.933-4.03-3.5-9-3.5-.678 0-1.336.032-1.97.087"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.059 11.998c.27-.578.57-1.163.91-1.75 2.485-4.305 5.857-7.01 7.53-6.044 1.048.604 1.183 2.501.53 4.89M12 11.99v.05m.204-.04a.204.204 0 1 1-.408 0 .204.204 0 0 1 .408 0"
    />
  </Svg>
);
export default IconlystReactNativeLight;
