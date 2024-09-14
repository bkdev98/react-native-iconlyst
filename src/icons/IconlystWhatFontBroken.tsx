import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhatFontBroken = ({
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
      d="M14.736 7.511c0-3.504 5.514-3.504 5.514 0 0 2.515-2.506 2.007-2.506 5.02M13.977 19.117 9.114 7.984 4.25 19.117M5.99 15.137h3.26M17.745 15.579v.064m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .521 0"
    />
  </Svg>
);
export default IconlystWhatFontBroken;
