import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperTotalBold = ({
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
      d="M18.044 12.752h-1.403a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5m-6.045 5.17a3.037 3.037 0 0 1-3.038-3.03 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.037 3.037 0 0 1-3.038 3.03m-4.641.6H5.955a.75.75 0 0 1 0-1.5h1.403a.75.75 0 1 1 0 1.5m10.454-10.26H6.188c-2.206 0-3.688 1.547-3.688 3.849v5.561c0 2.303 1.482 3.85 3.688 3.85h11.623c2.207 0 3.689-1.547 3.689-3.85v-5.561c0-2.302-1.482-3.849-3.688-3.849"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 13.352a1.54 1.54 0 0 0-1.538 1.54c0 .844.69 1.53 1.538 1.53s1.538-.686 1.538-1.53c0-.85-.69-1.54-1.538-1.54M6.754 6.762h10.493a.75.75 0 0 0 0-1.5H6.754a.75.75 0 0 0 0 1.5M8.69 4.102h6.619a.75.75 0 0 0 0-1.5H8.69a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperTotalBold;
