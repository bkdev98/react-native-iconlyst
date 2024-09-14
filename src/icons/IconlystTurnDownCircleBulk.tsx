import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnDownCircleBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.75c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.284 16.513-2.307-2.307a.746.746 0 0 1 0-1.061.75.75 0 0 1 1.06 0l1.028 1.028v-2.32a4.094 4.094 0 0 1 4.091-4.09 4.093 4.093 0 0 1 4.089 4.09v1.587a.75.75 0 0 1-1.5 0v-1.587a2.59 2.59 0 0 0-2.589-2.59 2.59 2.59 0 0 0-2.591 2.59v2.32l1.029-1.028a.75.75 0 1 1 1.061 1.06l-2.309 2.308a.8.8 0 0 1-.243.163c-.038.016-.08.015-.119.024-.056.013-.109.034-.169.034-.057 0-.107-.02-.161-.032-.042-.01-.087-.01-.127-.026a.8.8 0 0 1-.243-.163"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnDownCircleBulk;
