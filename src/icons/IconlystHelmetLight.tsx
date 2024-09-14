import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHelmetLight = ({
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
      d="M21.252 12.554a9 9 0 0 1-4.28 7.62 2.16 2.16 0 0 1-1.53.29l-8.88-1.54a2.2 2.2 0 0 1-1.34-.8 9 9 0 0 1 7.31-14.62 9.1 9.1 0 0 1 8.72 9.05"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.561 9.295-7.93-.17a1.648 1.648 0 0 0-1.56 2.3l.61 1.41a3 3 0 0 0 2.07 1.77l6.24 1.54"
    />
  </Svg>
);
export default IconlystHelmetLight;
