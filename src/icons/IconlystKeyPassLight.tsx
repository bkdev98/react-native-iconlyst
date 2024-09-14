import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyPassLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.605 21.23-1.889-1.89 1.116-1.4-1.08-1.16 1.08-1.435-1.08-1.08.002-1.429a4.604 4.604 0 1 1 3.741-.02l-.002 6.525z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.58 7.334a1.38 1.38 0 0 0-1.95 0M17.299 19.725v.008M17.296 17.04c-.012-.913.82-1.3 1.437-1.654.754-.415 1.264-1.076 1.264-1.994 0-1.36-1.1-2.45-2.45-2.45a2.44 2.44 0 0 0-2.45 2.45"
    />
  </Svg>
);
export default IconlystKeyPassLight;
