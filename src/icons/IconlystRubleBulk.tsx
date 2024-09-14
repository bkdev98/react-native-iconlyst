import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRubleBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M7.923 11.593h-.4a1 1 0 1 0 0 2h.4zM7.923 14.513h-.398a1 1 0 1 0 0 2h.398zM9.923 16.513h1.364a1 1 0 1 0 0-2H9.923zM13.218 11.593H9.923v2h3.294a4.265 4.265 0 0 0 0-8.53H9.923v2h3.294a2.267 2.267 0 0 1 2.26 2.27 2.263 2.263 0 0 1-2.26 2.26" />
    </G>
    <Path
      fill={props.color}
      d="M9.923 5.063v13a1 1 0 0 1-2 0v-12a1 1 0 0 1 1-1z"
    />
  </Svg>
);
export default IconlystRubleBulk;
