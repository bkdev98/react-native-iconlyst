import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardMenu3Bold = ({
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
      d="M16.422 8.789h-5.283a.75.75 0 0 1 0-1.5h5.283a.75.75 0 0 1 0 1.5m0 3.96h-5.283a.75.75 0 0 1 0-1.5h5.283a.75.75 0 0 1 0 1.5m0 3.96h-5.283a.75.75 0 0 1 0-1.5h5.283a.75.75 0 0 1 0 1.5m-8.539-7.92h-.305a.75.75 0 0 1 0-1.5h.305a.75.75 0 0 1 0 1.5m0 3.96h-.305a.75.75 0 0 1 0-1.5h.305a.75.75 0 0 1 0 1.5m0 3.96h-.305a.75.75 0 0 1 0-1.5h.305a.75.75 0 0 1 0 1.5M16.217 2.5H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoardMenu3Bold;
