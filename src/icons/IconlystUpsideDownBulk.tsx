import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpsideDownBulk = ({
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
      fillRule="evenodd"
      d="M16.716 2.5H8.283C5.123 2.5 3 4.721 3 8.026v7.948C3 19.28 5.123 21.5 8.283 21.5h8.434c3.16 0 5.283-2.22 5.283-5.526V8.026C22 4.721 19.876 2.5 16.716 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.724 15.549a.96.96 0 0 1-.691-.288.975.975 0 1 1 .691.288M12.5 8.875c-.903 0-1.764.448-2.364 1.228a.751.751 0 0 1-1.189-.914c.885-1.153 2.18-1.814 3.552-1.814s2.667.661 3.553 1.814a.75.75 0 0 1-1.189.914c-.6-.78-1.46-1.228-2.364-1.228M9.224 15.549a.96.96 0 0 1-.691-.288.975.975 0 1 1 .691.288"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpsideDownBulk;
