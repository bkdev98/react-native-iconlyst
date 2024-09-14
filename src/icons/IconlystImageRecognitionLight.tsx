import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageRecognitionLight = ({
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
      d="M3 8.47V6.891A3.89 3.89 0 0 1 6.893 3h1.29M3 15.531v1.577A3.89 3.89 0 0 0 6.893 21H8.15M21 15.531v1.577A3.89 3.89 0 0 1 17.108 21h-1.29M21 8.47V6.891A3.89 3.89 0 0 0 17.107 3H15.85M7.026 12.47c1.99-4.311 7.958-4.311 9.947 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.002 14.788a1.44 1.44 0 0 1-1.437-1.438 1.44 1.44 0 0 1 1.437-1.438 1.44 1.44 0 0 1 1.438 1.438 1.44 1.44 0 0 1-1.438 1.438"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageRecognitionLight;
