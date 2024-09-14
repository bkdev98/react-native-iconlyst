import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownRightLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.403 6.95a1.377 1.377 0 0 0 0 1.948l5.394 5.393a.53.53 0 0 1 0 .75L8.04 16.796c-.872.872-.246 2.367.987 2.364 2.921-.008 5.842.005 8.762 0a1.374 1.374 0 0 0 1.371-1.373c.002-2.923-.006-5.846 0-8.769.003-1.231-1.488-1.854-2.36-.983l-1.76 1.76a.53.53 0 0 1-.749 0L8.898 4.404a1.377 1.377 0 0 0-1.948 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownRightLight;
