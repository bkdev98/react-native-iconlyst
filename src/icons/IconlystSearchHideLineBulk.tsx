import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchHideLineBulk = ({
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
      d="M11.252 2.623c-4.74 0-8.6 3.86-8.6 8.6a8.6 8.6 0 1 0 8.6-8.6"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.394 11.963h-4.3c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h4.3a.749.749 0 1 1 0 1.5M19.581 17.847a1.765 1.765 0 1 0-.002 3.53 1.765 1.765 0 0 0 .002-3.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchHideLineBulk;
