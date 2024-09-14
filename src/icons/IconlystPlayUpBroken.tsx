import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayUpBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.555 12.357a25 25 0 0 0-1.314 2.711c-.737 2.272.232 3.58 2.79 3.993 1.6.18 3.263.264 4.972.257a43 43 0 0 0 4.974-.257c2.567-.399 3.51-1.723 2.79-3.993-1.125-2.791-3.484-6.465-5.323-8.495q-2.44-2.778-4.882 0a25 25 0 0 0-1.7 2.137"
    />
  </Svg>
);
export default IconlystPlayUpBroken;
