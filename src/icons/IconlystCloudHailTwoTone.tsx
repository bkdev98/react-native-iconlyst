import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudHailTwoTone = ({
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
      d="M18.618 15.88a4.14 4.14 0 0 0 2.437-3.774c0-2.596-1.83-4.139-4.103-4.14 0-1.633-1.28-4.899-4.897-4.899S7.158 6.333 7.158 7.965c-2.27.02-4.103 1.545-4.103 4.141 0 1.68.999 3.126 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.055 20.884.009.049M7.63 20.884l1.3-.75v-1.5l-1.3-.75-1.299.75v1.5zM16.48 20.884l1.299-.75v-1.5l-1.3-.75-1.298.75v1.5zM12.055 17.683l1.299-.75v-1.5l-1.3-.75-1.298.75v1.5z"
    />
  </Svg>
);
export default IconlystCloudHailTwoTone;
