import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetSearchTwoTone = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.1 14.23a2.85 2.85 0 1 0 0-5.7 2.85 2.85 0 0 0 0 5.7"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3.25 9.54a8.99 8.99 0 0 1 6.79-6.79M14 2.75c3.37.76 6.03 3.41 6.79 6.79M10.04 20.29a9 9 0 0 1-6.79-6.79M20.79 13.5A9.02 9.02 0 0 1 14 20.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m18.49 17.97 3.66 3.65"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTargetSearchTwoTone;
