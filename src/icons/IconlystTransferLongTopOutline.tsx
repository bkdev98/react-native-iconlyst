import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLongTopOutline = ({
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
      d="M5.314 9.936a.75.75 0 0 1 .13-.808l6-6.631a.75.75 0 0 1 1.112 0l6 6.631A.75.75 0 0 1 18 10.382h-3.25V21a.75.75 0 0 1-1.5 0V9.632a.75.75 0 0 1 .75-.75h2.31L12 4.118 7.69 8.882H10a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0V10.382H6a.75.75 0 0 1-.686-.446"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferLongTopOutline;
