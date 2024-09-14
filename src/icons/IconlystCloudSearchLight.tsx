import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSearchLight = ({
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
      d="M18.564 17.032A4.14 4.14 0 0 0 21 13.258c0-2.596-1.83-4.14-4.103-4.14 0-1.633-1.28-4.9-4.897-4.9s-4.897 3.267-4.897 4.9C4.833 9.138 3 10.662 3 13.258c0 1.679 1 3.125 2.436 3.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 13.703a2.72 2.72 0 1 1 0 5.44 2.72 2.72 0 0 1 0-5.44"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.848 18.414 1.369 1.366"
    />
  </Svg>
);
export default IconlystCloudSearchLight;