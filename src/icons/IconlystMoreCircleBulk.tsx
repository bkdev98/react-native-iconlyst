import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreCircleBulk = ({
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
        d="M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10"
        opacity={0.4}
      />
      <Path d="M7.521 10.804c.661 0 1.198.537 1.198 1.196a1.2 1.2 0 0 1-1.198 1.197A1.2 1.2 0 0 1 6.323 12c0-.66.537-1.197 1.198-1.197m4.48 0c.66 0 1.197.537 1.197 1.196A1.2 1.2 0 0 1 12 13.197 1.2 1.2 0 0 1 10.802 12c0-.66.537-1.197 1.198-1.197m4.479 0c.66 0 1.198.537 1.198 1.196a1.2 1.2 0 0 1-1.198 1.197A1.2 1.2 0 0 1 15.282 12c0-.66.537-1.197 1.198-1.197" />
    </G>
  </Svg>
);
export default IconlystMoreCircleBulk;
