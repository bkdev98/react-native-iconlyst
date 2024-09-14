import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3 8.81h6.558c1.916 0 3.36-1.444 3.36-3.36a3.364 3.364 0 0 0-3.36-3.36c-.949 0-1.86.408-2.502 1.12a1.001 1.001 0 0 0 1.486 1.339 1.37 1.37 0 0 1 1.016-.46c.75 0 1.36.61 1.36 1.36 0 .802-.56 1.36-1.36 1.36H3a1 1 0 1 0 0 2M12.855 15.19H3a1 1 0 1 0 0 2h9.855c.801 0 1.36.559 1.36 1.36a1.36 1.36 0 0 1-2.486.762 1.001 1.001 0 0 0-1.66 1.116 3.35 3.35 0 0 0 2.786 1.482 3.363 3.363 0 0 0 3.36-3.36c0-1.916-1.445-3.36-3.36-3.36"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.12 5.15c-1.06 0-2.084.437-2.81 1.2a1 1 0 0 0 .035 1.414 1 1 0 0 0 1.414-.034A1.883 1.883 0 0 1 20 9.03c0 .894-.498 1.857-1.88 1.88H3a1 1 0 1 0 0 2h15.137C20.411 12.872 22 11.277 22 9.03c0-2.14-1.74-3.88-3.88-3.88"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWindBold;
