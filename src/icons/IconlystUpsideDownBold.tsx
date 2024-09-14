import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpsideDownBold = ({
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
      d="M15.224 15.551a.96.96 0 0 1-.691-.288.975.975 0 1 1 .691.288m-3.225-6.674c-.902 0-1.763.448-2.363 1.228a.751.751 0 0 1-1.189-.914c.885-1.153 2.18-1.814 3.552-1.814s2.667.661 3.553 1.814a.75.75 0 0 1-1.189.914c-.6-.78-1.461-1.228-2.364-1.228m-3.275 6.674a.96.96 0 0 1-.691-.288.975.975 0 1 1 .691.288M16.216 2.5H7.783C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.306 2.123 5.526 5.283 5.526h8.434c3.16 0 5.283-2.22 5.283-5.526V8.026c0-3.305-2.124-5.526-5.284-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpsideDownBold;
