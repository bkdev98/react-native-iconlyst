import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWrenchLight = ({
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
      d="M10.013 21v-3.8a7.69 7.69 0 0 1-4.726-7.1A7.7 7.7 0 0 1 10.013 3v6.07c0 .403.241.766.613.922l1.967.825a1 1 0 0 0 .775-.001l1.957-.823c.371-.157.612-.52.612-.922V3a7.68 7.68 0 0 1 4.737 7.1 7.67 7.67 0 0 1-4.737 7.1V21"
    />
  </Svg>
);
export default IconlystWrenchLight;
