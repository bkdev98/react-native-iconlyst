import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxChangeLight = ({
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
      d="M12.354 14.764v3.347c0 .432-.23.832-.605 1.048l-2.898 1.673a1.21 1.21 0 0 1-1.21 0l-2.9-1.673a1.21 1.21 0 0 1-.603-1.048v-3.347c0-.432.23-.832.604-1.048l2.9-1.674a1.21 1.21 0 0 1 1.209 0l2.898 1.674c.375.216.605.616.605 1.048M21.56 5.883V9.23c0 .432-.23.832-.605 1.048l-2.898 1.674a1.21 1.21 0 0 1-1.21 0l-2.899-1.674a1.21 1.21 0 0 1-.604-1.048V5.883c0-.432.23-.831.604-1.047l2.9-1.674a1.21 1.21 0 0 1 1.209 0l2.898 1.674c.375.216.606.615.606 1.047M17.453 12.12V7.538"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.514 5.264 3.936 2.277 3.936-2.277M4.309 14.145l3.936 2.276 3.936-2.276M8.246 21V16.42M4.137 8.222A5.22 5.22 0 0 1 9.359 3l-.62 1.668M21.56 15.777a5.22 5.22 0 0 1-5.222 5.222l.62-1.668"
    />
  </Svg>
);
export default IconlystDeliveryBoxChangeLight;
