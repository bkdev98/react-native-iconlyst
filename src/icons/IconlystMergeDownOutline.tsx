import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMergeDownOutline = ({
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
      d="M20.578 3.38a.75.75 0 0 1-.1 1.055L14.723 9.19a.75.75 0 0 1-.956-1.156l5.755-4.755a.75.75 0 0 1 1.056.1M3.436 3.363a.75.75 0 0 1 1.058-.07l8 7a.75.75 0 0 1 .256.564v7.475l2.255-2.255a.75.75 0 0 1 1.06 1.06l-3.535 3.536a.75.75 0 0 1-1.06 0l-3.536-3.535a.75.75 0 1 1 1.06-1.061l2.256 2.255v-7.135L3.506 4.422a.75.75 0 0 1-.07-1.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMergeDownOutline;
