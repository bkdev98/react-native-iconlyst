import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudCircleLight = ({
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
      d="M9.334 10.783c-1.26.011-2.28.857-2.28 2.3a2.3 2.3 0 0 0 1.354 2.096c.336.137.67.189.925.189h5.44c.255 0 .59-.05.93-.186a2.3 2.3 0 0 0 1.352-2.1c0-1.442-1.019-2.288-2.28-2.3 0-.906-.711-2.72-2.72-2.72s-2.72 1.814-2.72 2.72"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.419 5.636A9 9 0 1 1 5.69 18.364 9 9 0 0 1 18.419 5.636"
    />
  </Svg>
);
export default IconlystCloudCircleLight;
