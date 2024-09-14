import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWrenchTwoTone = ({
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
      d="M9.032 21v-3.8a7.69 7.69 0 0 1-4.725-7.1A7.7 7.7 0 0 1 9.032 3m5.925 0a7.68 7.68 0 0 1 4.736 7.1 7.67 7.67 0 0 1-4.736 7.1V21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.032 3v6.07c0 .403.242.766.613.922l1.968.825a1 1 0 0 0 .774-.001l1.958-.823c.37-.157.612-.52.612-.922V3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWrenchTwoTone;
