import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase5Bulk = ({
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
      fillRule="evenodd"
      d="M3.5 7.317A4.817 4.817 0 0 1 8.317 2.5h6.969a4.817 4.817 0 0 1 4.817 4.817v9.365a4.82 4.82 0 0 1-4.817 4.818H8.317A4.82 4.82 0 0 1 3.5 16.682z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.038 8.164a.75.75 0 0 1 .75-.75h8.027a.75.75 0 0 1 0 1.5H7.788a.75.75 0 0 1-.75-.75m3.818 8.084a.946.946 0 1 1 1.891 0 .946.946 0 0 1-1.89 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodCase5Bulk;
