import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleTwoTone = ({
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
      d="M8.11 3.758h8.458c2.944 0 4.767 1.641 4.758 4.658v7.16c0 3.017-1.823 4.667-4.766 4.667H8.11c-2.935 0-4.768-1.68-4.768-4.744V8.416c0-3.017 1.833-4.658 4.767-4.658"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.537 15.832h2.21m5.445 0h1.939M14.297 12.375h-2.341m-2.705 0H7.597M12.32 15.832h-.01M17.085 12.375h.01M21.334 8.574h-18"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSubtitleTwoTone;
