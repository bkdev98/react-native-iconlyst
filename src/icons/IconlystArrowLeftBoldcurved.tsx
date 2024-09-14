import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftBoldcurved = ({
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
      d="M19.75 11H6.117c.906-1.419 3.327-3.156 5.157-4.145a1 1 0 1 0-.949-1.759c-1.097.591-6.57 3.704-6.575 6.902v.004c0 3.197 5.478 6.31 6.575 6.902a1 1 0 0 0 1.355-.405 1 1 0 0 0-.406-1.354C9.443 16.155 7.02 14.418 6.115 13H19.75a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeftBoldcurved;
