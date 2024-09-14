import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.62 5.148c-1.06 0-2.084.437-2.811 1.201a1 1 0 0 0 .036 1.413 1 1 0 0 0 1.414-.034 1.883 1.883 0 0 1 3.241 1.3c0 .894-.498 1.857-1.88 1.88H3.5a1 1 0 1 0 0 2h15.137c2.274-.038 3.863-1.633 3.863-3.88 0-2.139-1.74-3.88-3.88-3.88"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M3.5 8.81h6.558c1.916 0 3.36-1.444 3.36-3.36a3.364 3.364 0 0 0-3.36-3.36c-.949 0-1.86.408-2.502 1.12a1.001 1.001 0 0 0 1.486 1.339 1.37 1.37 0 0 1 1.016-.46c.75 0 1.36.61 1.36 1.36 0 .802-.56 1.36-1.36 1.36H3.5a1 1 0 1 0 0 2M13.355 15.19H3.5a1 1 0 1 0 0 2h9.855c.801 0 1.36.559 1.36 1.36a1.36 1.36 0 0 1-2.486.762 1.001 1.001 0 0 0-1.66 1.116 3.35 3.35 0 0 0 2.786 1.482 3.363 3.363 0 0 0 3.36-3.36c0-1.916-1.445-3.36-3.36-3.36" />
    </G>
  </Svg>
);
export default IconlystWindBulk;
