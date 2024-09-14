import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockLight = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M16.424 5.562A4.55 4.55 0 0 0 12.122 2.5a4.55 4.55 0 0 0-4.57 4.531v2.167" />
      <Path d="M15.933 21H8.292A3.793 3.793 0 0 1 4.5 17.207V12.92a3.793 3.793 0 0 1 3.792-3.793h7.641a3.793 3.793 0 0 1 3.792 3.793v4.288A3.793 3.793 0 0 1 15.933 21M12.113 13.953v2.222" />
    </G>
  </Svg>
);
export default IconlystUnlockLight;
