import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyChristmasBroken = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.319 11.418c1.2 0 2.173-.973 2.173-2.174a1.508 1.508 0 0 1 3.016 0v10.422a2.173 2.173 0 1 0 4.346 0V9.244a5.854 5.854 0 1 0-11.708 0M11.882 7.725v-1.75M7.052 6.147l1.722 1.418M13.468 8.901l3.469-2.815M17.826 10.606 15.7 12.33"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.573 19.298 2.133-1.731 2.133-1.731"
    />
  </Svg>
);
export default IconlystCandyChristmasBroken;
