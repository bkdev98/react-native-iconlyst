import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchChargeTwoTone = ({
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
      d="M9.326 22h6.348M9.326 2h6.348"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.42 5.291h6.166c2.146 0 3.475 1.191 3.469 3.382v6.646c0 2.19-1.33 3.388-3.475 3.388H9.42c-2.14 0-3.475-1.22-3.475-3.443V8.673c0-2.19 1.335-3.382 3.475-3.382"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.69 14.899 14.27 12h-3.537l1.578-2.9"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSquareAppleWatchChargeTwoTone;
