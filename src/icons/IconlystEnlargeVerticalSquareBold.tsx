import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeVerticalSquareBold = ({
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
      d="M16.764 13.002H7.241a.75.75 0 1 1 0-1.5h9.523a.75.75 0 0 1 0 1.5m-2.087 2.923-2.145 2.145a.746.746 0 0 1-1.061 0l-2.145-2.145a.749.749 0 1 1 1.06-1.06l1.615 1.615 1.616-1.615a.749.749 0 1 1 1.06 1.06M9.326 8.576l2.145-2.145a.75.75 0 0 1 1.061 0l2.145 2.145a.749.749 0 1 1-1.06 1.06l-1.616-1.614-1.615 1.614a.749.749 0 1 1-1.06-1.06m6.89-5.826H7.783C4.623 2.75 2.5 4.971 2.5 8.276v7.948c0 3.305 2.123 5.526 5.283 5.526h8.434c3.16 0 5.283-2.221 5.283-5.526V8.276c0-3.305-2.124-5.526-5.284-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeVerticalSquareBold;
