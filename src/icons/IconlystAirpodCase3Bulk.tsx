import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase3Bulk = ({
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
      d="M3.699 7.317A4.817 4.817 0 0 1 8.516 2.5h6.968a4.817 4.817 0 0 1 4.817 4.817v.62H3.7z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.699 9.438v7.244A4.82 4.82 0 0 0 8.516 21.5h6.968a4.82 4.82 0 0 0 4.817-4.818V9.438z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.057 16.77a.946.946 0 1 1 1.892 0 .946.946 0 0 1-1.892 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodCase3Bulk;
