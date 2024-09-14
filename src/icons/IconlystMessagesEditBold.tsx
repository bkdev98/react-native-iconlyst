import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesEditBold = ({
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
      fillRule="evenodd"
      d="M13.832 10.136a.4.4 0 0 0-.267-.104h-.014a.38.38 0 0 0-.271.125l-3.625 3.97a1.24 1.24 0 0 0-.304.69l-.093.865a.18.18 0 0 0 .209.203l.833-.14c.277-.046.534-.188.723-.4l3.593-3.934a.4.4 0 0 0-.018-.565z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.72 12.427-3.584 3.924a2.75 2.75 0 0 1-1.588.874l-.83.138a1.666 1.666 0 0 1-1.433-.435 1.67 1.67 0 0 1-.518-1.408l.092-.861a2.72 2.72 0 0 1 .684-1.539l3.631-3.977a1.88 1.88 0 0 1 1.317-.61c.511-.018.99.16 1.36.504l.766.71c.766.713.811 1.915.103 2.68m3.753-5.351a9.53 9.53 0 0 0-6.918-3.63 9.48 9.48 0 0 0-7.277 2.775c-2.806 2.813-3.57 7.136-1.913 10.73.04.1.162.404.99 1.848a.47.47 0 0 1-.025.509c-.22.314-.503.715-.72 1.044-.285.425-.31.97-.07 1.418.24.445.701.721 1.204.721h.618c2.37-.002 5.786-.003 6.602 0h.033a9.5 9.5 0 0 0 7.272-3.396c2.898-3.437 2.984-8.492.204-12.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesEditBold;
