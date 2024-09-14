import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJustifiedBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M20 6H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2M20 20H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2" />
    </G>
    <Path
      fill={props.color}
      d="M4 15.33h16a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2M4 10.67h16a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2"
    />
  </Svg>
);
export default IconlystJustifiedBulk;
