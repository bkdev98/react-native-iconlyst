import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailTwoTone = ({
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
      d="M21.5 15.094c0 2.766-1.845 5.013-4.582 5.006H8.082c-2.737.007-4.582-2.24-4.582-5.006v-6.18C3.5 6.15 5.345 3.9 8.082 3.9h8.836c2.737 0 4.582 2.25 4.582 5.013z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.127 6.974-6.504 5.289a3.366 3.366 0 0 1-4.186 0l-6.56-5.29M9.185 11.254l-5.314 5.772m17.258 0-5.256-5.771"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEmailTwoTone;
