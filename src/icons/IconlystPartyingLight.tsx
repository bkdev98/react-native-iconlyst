import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPartyingLight = ({
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.117 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M13.586 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M9.12 14.29c.702.912 1.734 1.48 2.88 1.48s2.18-.568 2.88-1.48M9 3.5 2 2l1.5 7M3 5.5 5.5 3"
    />
  </Svg>
);
export default IconlystPartyingLight;
