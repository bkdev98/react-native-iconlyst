import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardRefreshLight = ({
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
      d="M13.967 3c.558 0 1.092.228 1.478.63l3.792 3.95c.366.381.571.89.571 1.42v8.28a3.72 3.72 0 0 1-3.72 3.72h-7.19a3.72 3.72 0 0 1-3.72-3.722V6.721A3.72 3.72 0 0 1 8.898 3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 12.003-1.475-.748a2.994 2.994 0 0 1 4.976 2.245M13.015 14.997l1.474.748A2.995 2.995 0 0 1 9.513 13.5"
    />
  </Svg>
);
export default IconlystSimcardRefreshLight;
