import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesExclamationBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.798 12.62a.75.75 0 0 1-1.5 0V9.808a.75.75 0 0 1 1.5 0zm-.752 3.586c-.414 0-.75-.3-.75-.713v-.074a.75.75 0 0 1 1.5 0c0 .415-.336.787-.75.787M19.02 5.873a9.42 9.42 0 0 0-6.717-2.789 9.43 9.43 0 0 0-6.72 2.79C2.778 8.687 2.013 13.01 3.67 16.603c.19.477.316.81.316 1.09 0 .334-.141.75-.278 1.152-.265.779-.565 1.662.077 2.308.65.648 1.532.345 2.313.073.396-.137.806-.277 1.13-.28.292 0 .658.148 1.08.319A9.523 9.523 0 0 0 19.02 19.35c3.704-3.717 3.704-9.763 0-13.478"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesExclamationBold;
