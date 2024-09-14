import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRocketTwoTone = ({
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
      d="m7.817 13.129-2.87 3.366v2.656a33 33 0 0 1 4.047-.769 31.4 31.4 0 0 1 7.521 0c1.36.172 2.71.428 4.038.769v-2.656l-2.92-3.366"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.178 18.976a24 24 0 0 1-1.4-6.558S7.552 5.218 12.748 3c5.118 2.13 4.972 9.418 4.972 9.418a23.6 23.6 0 0 1-1.401 6.558A9.7 9.7 0 0 1 15.405 21h-5.302a16 16 0 0 1-.925-2.024"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.78 13.615a1.391 1.391 0 1 0 0-2.783 1.391 1.391 0 0 0 0 2.783"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.972 7.66h4.806"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRocketTwoTone;
