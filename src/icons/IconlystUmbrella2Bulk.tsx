import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrella2Bulk = ({
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
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M19.532 14.144a1.967 1.967 0 0 0 1.942-2.282C20.66 7.013 16.677 3.494 12 3.494s-8.661 3.52-9.474 8.37a1.968 1.968 0 0 0 1.942 2.281z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 14.145v4.88a2.734 2.734 0 0 0 2.73 2.73 2.733 2.733 0 0 0 2.732-2.73.75.75 0 0 0-1.5 0 1.231 1.231 0 0 1-2.462 0v-4.88z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUmbrella2Bulk;
