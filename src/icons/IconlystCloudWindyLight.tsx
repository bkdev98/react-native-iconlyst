import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWindyLight = ({
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
      d="M11.873 5.84c-3.543 0-4.798 3.199-4.798 4.799-2.223.02-4.02 1.513-4.02 4.056 0 .803.233 1.551.635 2.181"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.39 20.811a3.39 3.39 0 1 0-3.251-4.348 2.253 2.253 0 1 0-.83 4.348zM14.568 5.84h3.918M18.97 8.376h2.085M17.248 3.19h3.445M5.125 3.19h2.093"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.602 18.726h4.066c.448 0 1.04-.088 1.64-.328a4.06 4.06 0 0 0 2.383-3.703c0-2.543-1.796-4.036-4.02-4.056 0-.473-.108-1.085-.354-1.712"
    />
  </Svg>
);
export default IconlystCloudWindyLight;
