import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnLeftOutline = ({
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
      d="M7.584 12.03a.75.75 0 0 1 0 1.06L5.06 15.615l1.331 1.332 1.192 1.191a.75.75 0 1 1-1.061 1.061L5.33 18.006 3.47 16.145a.75.75 0 0 1 0-1.061l3.053-3.054a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.67 5.328a.75.75 0 0 1 .75-.75h8.437a5.893 5.893 0 0 1 0 11.786H4a.75.75 0 1 1 0-1.5h10.857a4.393 4.393 0 0 0 0-8.786H6.42a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnLeftOutline;
