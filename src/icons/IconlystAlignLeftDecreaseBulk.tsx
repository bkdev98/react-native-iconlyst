import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignLeftDecreaseBulk = ({
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
      d="M16.444 18H4a1 1 0 1 0 0 2h12.444a1 1 0 1 0 0-2M4 10.67h12.444a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M4 6h16a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2M20 13.33H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2" />
    </G>
  </Svg>
);
export default IconlystAlignLeftDecreaseBulk;
