import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneMuteBulk = ({
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
      fill={props.color}
      d="M5.893 4.162a.75.75 0 1 0-1.061 1.061l3.58 3.58v1.952c-.01 2.294 1.854 4.168 4.158 4.178.559 0 1.11-.12 1.629-.344l1.725 1.725a6.43 6.43 0 0 1-3.342.964h-.004l-.002-.001h-.01l-.006.002c-3.556-.014-6.448-2.916-6.448-6.474v-.019a.74.74 0 0 0-.75-.74.76.76 0 0 0-.75.76c0 4.134 3.17 7.546 7.21 7.934v2.135a.75.75 0 0 0 1.5 0V18.74a7.96 7.96 0 0 0 3.699-1.329l2.227 2.228a.751.751 0 0 0 1.06-1.06z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.21 11.646a.5.5 0 0 1-.354-.146L9.189 4.832a.5.5 0 0 1-.06-.635 4.16 4.16 0 0 1 3.44-1.822 4.163 4.163 0 0 1 4.159 4.157v4.226c0 .147-.01.284-.02.422v.003a.5.5 0 0 1-.498.463m2.497 3a.75.75 0 0 0 1.005-.34 7.86 7.86 0 0 0 .816-3.521.75.75 0 0 0-1.5 0c0 1.01-.222 1.97-.66 2.856a.75.75 0 0 0 .339 1.005"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMicrophoneMuteBulk;
