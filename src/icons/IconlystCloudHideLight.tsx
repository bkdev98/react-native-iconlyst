import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudHideLight = ({
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
      d="M18.564 18.106A4.14 4.14 0 0 0 21 14.332c0-2.596-1.83-4.14-4.103-4.14 0-1.633-1.28-4.899-4.897-4.899s-4.897 3.266-4.897 4.899C4.833 10.212 3 11.736 3 14.332c0 1.68 1 3.125 2.436 3.774M14.055 18.707h-4.11"
    />
  </Svg>
);
export default IconlystCloudHideLight;