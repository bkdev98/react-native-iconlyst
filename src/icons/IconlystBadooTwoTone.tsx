import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBadooTwoTone = ({
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
      d="M16.255 4.806zc2.121.034 3.914 1.506 4.521 3.446.377 1.205.234 2.534-.1 3.73-1.158 4.146-5.24 7.216-8.676 7.216-3.438 0-7.518-3.07-8.676-7.215-.334-1.197-.476-2.527-.1-3.73.607-1.942 2.4-3.414 4.523-3.447A4.56 4.56 0 0 1 12 7.474a4.57 4.57 0 0 1 4.255-2.668"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.05 11.102A4.14 4.14 0 0 1 12 14.7a4.14 4.14 0 0 1-4.048-3.598"
    />
  </Svg>
);
export default IconlystBadooTwoTone;
