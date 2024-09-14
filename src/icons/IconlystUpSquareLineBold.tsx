import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpSquareLineBold = ({
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
      d="M15.568 11.196a.75.75 0 0 1-1.061-.002L12.75 9.43v4.807a.75.75 0 0 1-1.5 0V9.429l-1.758 1.765a.75.75 0 1 1-1.063-1.06l3.038-3.05q.007-.003.013-.008a.75.75 0 0 1 1.052.01l3.038 3.048a.75.75 0 0 1-.002 1.061m-.844 6.569h-5.45a.75.75 0 0 1 0-1.5h5.45a.75.75 0 0 1 0 1.5m1.493-14.952H7.783c-3.16 0-5.283 2.22-5.283 5.526v7.948c0 3.305 2.123 5.526 5.283 5.526h8.434c3.16 0 5.283-2.221 5.283-5.526V8.34c0-3.306-2.123-5.527-5.283-5.527"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpSquareLineBold;
