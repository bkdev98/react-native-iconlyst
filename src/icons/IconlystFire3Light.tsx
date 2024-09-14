import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire3Light = ({
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
      d="M18.554 8.85c2.426 4.72.475 11.042-5.097 11.96-7.296 1.6-12.164-7.309-6.682-12.532.293-.289 1.1-1.037 1.436-1.277 0 .5.442 4.373 1.132 4.08 2.842 0 3.605-5.08 3.213-8.081 2.558 1.337 4.725 3.2 5.998 5.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFire3Light;
