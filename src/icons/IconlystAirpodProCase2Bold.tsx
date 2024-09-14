import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodProCase2Bold = ({
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
      fill={props.color}
      d="M2.5 9.122A5.623 5.623 0 0 1 8.123 3.5h7.753a5.62 5.62 0 0 1 5.622 5.622v.06H2.5z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 10.682v4.64a5.624 5.624 0 0 0 5.623 5.623h7.753a5.623 5.623 0 0 0 5.622-5.624v-4.64zm8.554 3.408a.946.946 0 1 1 1.892 0 .946.946 0 0 1-1.892 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodProCase2Bold;
