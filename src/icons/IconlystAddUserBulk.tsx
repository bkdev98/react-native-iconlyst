import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M21.101 9.588h-1.203V8.412a.906.906 0 0 0-.899-.912.907.907 0 0 0-.899.912v1.176h-1.201a.906.906 0 0 0-.899.911c0 .503.403.912.899.912H18.1v1.177c0 .503.404.912.899.912.496 0 .899-.41.899-.912v-1.177H21.1c.495 0 .899-.41.899-.912a.907.907 0 0 0-.899-.911"
        opacity={0.4}
      />
      <Path d="M9.5 15.016c-4.046 0-7.5.646-7.5 3.23S5.433 21.5 9.5 21.5c4.045 0 7.5-.647 7.5-3.231s-3.433-3.253-7.5-3.253" />
      <Path
        d="M9.5 12.554c2.755 0 4.963-2.236 4.963-5.026S12.255 2.5 9.5 2.5 4.537 4.738 4.537 7.528s2.208 5.026 4.963 5.026"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystAddUserBulk;
