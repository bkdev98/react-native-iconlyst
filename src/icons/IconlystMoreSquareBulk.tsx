import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreSquareBulk = ({
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
        d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2"
        opacity={0.4}
      />
      <Path d="M7.521 10.804c.661 0 1.198.537 1.198 1.195a1.2 1.2 0 0 1-1.198 1.198A1.2 1.2 0 0 1 6.323 12c0-.66.537-1.197 1.198-1.197m4.48 0c.66 0 1.197.537 1.197 1.195A1.2 1.2 0 0 1 12 13.198 1.2 1.2 0 0 1 10.802 12c0-.66.537-1.197 1.198-1.197m4.479 0c.66 0 1.198.537 1.198 1.195a1.2 1.2 0 0 1-1.198 1.198A1.2 1.2 0 0 1 15.282 12c0-.66.537-1.197 1.198-1.197" />
    </G>
  </Svg>
);
export default IconlystMoreSquareBulk;
