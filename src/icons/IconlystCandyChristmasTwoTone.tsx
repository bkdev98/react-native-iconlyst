import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyChristmasTwoTone = ({
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
      d="M6.146 9.244a5.854 5.854 0 0 1 11.708 0v10.422a2.173 2.173 0 1 1-4.346 0V9.244a1.508 1.508 0 1 0-3.016 0 2.173 2.173 0 1 1-4.346 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.882 7.725V3.42M7.052 6.147l3.443 2.836M13.468 8.901l3.469-2.815M13.573 14.057l4.253-3.452M13.573 19.298l4.266-3.462"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCandyChristmasTwoTone;
