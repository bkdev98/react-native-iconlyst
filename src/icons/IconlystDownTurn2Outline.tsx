import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownTurn2Outline = ({
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
      d="M4.8 16.416a.75.75 0 0 1 1.06 0l2.523 2.523 2.524-2.523a.75.75 0 0 1 1.06 1.06L8.915 20.53a.75.75 0 0 1-1.06 0L4.8 17.477a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.525 4.75a4.39 4.39 0 0 0-4.392 4.393V20a.75.75 0 0 1-1.5 0V9.143a5.893 5.893 0 0 1 11.786 0v2.79a.75.75 0 0 1-1.5 0v-2.79a4.393 4.393 0 0 0-4.394-4.393"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownTurn2Outline;
