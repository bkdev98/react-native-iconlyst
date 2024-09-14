import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBulk = ({
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
      <Path d="M9.35 14.858c-3.964 0-7.35.612-7.35 3.06S5.364 21 9.35 21c3.963 0 7.349-.612 7.349-3.06s-3.364-3.082-7.35-3.082" />
      <Path
        d="M9.35 12.525c2.699 0 4.862-2.119 4.862-4.763S12.05 3 9.35 3C6.651 3 4.486 5.119 4.486 7.762c0 2.644 2.165 4.763 4.863 4.763M16.173 7.849a6.37 6.37 0 0 1-1.137 3.646c-.075.107-.008.252.123.275q.273.046.56.052c1.898.048 3.601-1.148 4.072-2.95.697-2.675-1.35-5.077-3.957-5.077-.283 0-.554.03-.818.082-.036.008-.075.025-.095.055-.025.04-.007.09.019.124a6.4 6.4 0 0 1 1.233 3.793"
        opacity={0.4}
      />
      <Path d="M21.78 15.17c-.348-.726-1.187-1.223-2.463-1.468-.601-.143-2.232-.348-3.747-.319-.023.003-.036.018-.037.028-.003.015.003.038.033.055.7.339 3.408 1.815 3.067 4.927a.207.207 0 0 0 .234.232c.667-.093 2.38-.454 2.912-1.578a2.1 2.1 0 0 0 0-1.878" />
    </G>
  </Svg>
);
export default IconlystUserBulk;
