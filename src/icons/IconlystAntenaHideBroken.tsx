import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaHideBroken = ({
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
      d="m10.962 10.46-6.931 6.941c-1.13 1.13-.329 3.064 1.267 3.064h3.468M20.436 19.934a1.78 1.78 0 0 1-1.267.53h-6.936M9.139 8.64 21.499 21M13.88 7.54l4.012-4.01c1.132-1.132 3.065-.33 3.065 1.265v9.832"
    />
  </Svg>
);
export default IconlystAntenaHideBroken;
