import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendDownGraphBoxLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.282 3.119h8.435c2.94 0 4.783 2.08 4.783 5.026v7.947c0 2.946-1.835 5.027-4.783 5.027H8.283c-2.949 0-4.783-2.081-4.783-5.027V8.145c0-2.945 1.834-5.026 4.782-5.026"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.658 16.53v-.987M12.498 16.53v-2.67M8.34 16.534V12.18M17.127 11.186l-.578-.04a15.36 15.36 0 0 1-8.678-3.44"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.82 9.428 1.308 1.758-1.758 1.309"
    />
  </Svg>
);
export default IconlystTrendDownGraphBoxLight;
