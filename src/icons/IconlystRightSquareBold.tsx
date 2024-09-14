import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightSquareBold = ({
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
      d="m16.391 12.785-3.405 3.39a.747.747 0 0 1-1.06-.002.75.75 0 0 1 .002-1.06l2.118-2.109H8.137a.75.75 0 0 1 0-1.5h5.91l-2.12-2.114a.75.75 0 0 1 1.06-1.063l3.404 3.396c.033.032.049.074.075.111.03.043.066.081.087.129a.76.76 0 0 1 0 .581.8.8 0 0 1-.13.194c-.013.014-.018.033-.032.047M16.217 2.75H7.782C4.622 2.75 2.5 4.971 2.5 8.276v7.948c0 3.305 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.276c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightSquareBold;
