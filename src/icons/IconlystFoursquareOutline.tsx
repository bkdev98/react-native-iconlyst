import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoursquareOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.69 4.874A2.624 2.624 0 0 1 7.313 2.25h10.31c1.051 0 1.846.952 1.66 1.986L17.62 13.49a2.63 2.63 0 0 1-2.583 2.161h-3.29l-4.54 5.616a1 1 0 0 1-.053.059c-.909.909-2.465.265-2.465-1.021zM7.313 3.75c-.622 0-1.125.503-1.125 1.124V20.14l4.617-5.71a.75.75 0 0 1 .583-.279h3.647c.544 0 1.011-.39 1.108-.926l1.664-9.254a.188.188 0 0 0-.184-.221z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 8.621a.75.75 0 0 1 .75-.75h5.623a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFoursquareOutline;
