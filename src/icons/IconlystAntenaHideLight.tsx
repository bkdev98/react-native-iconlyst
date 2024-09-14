import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaHideLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.462 10.46-6.931 6.942c-1.13 1.13-.329 3.063 1.267 3.063h13.87c.494 0 .939-.202 1.268-.53M8.639 8.64 20.999 21M13.38 7.54l4.012-4.01c1.132-1.132 3.065-.33 3.065 1.265v9.832"
    />
  </Svg>
);
export default IconlystAntenaHideLight;
