import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApplesLight = ({
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
      d="M17.672 14.09c.074-.507.113-1.046.108-1.62-.32-5.182-4.132-4.731-5.144-4.458a7.77 7.77 0 0 1-4.107 0c-1.011-.273-4.824-.724-5.144 4.459-.032 3.892 3.321 10.647 7.826 7.219"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.583 8.27c0-1.59-1.1-3.4-3.12-3.792M10.326 6.378S9.858 2.984 13.871 3c.336 3.823-3.545 3.378-3.545 3.378M9.134 15.736c-.1-.605.309-1.168.866-1.168h9.734c.557 0 .967.564.866 1.169-.5 2.992-2.877 5.26-5.732 5.263-2.859-.002-5.235-2.27-5.734-5.264"
    />
  </Svg>
);
export default IconlystApplesLight;
