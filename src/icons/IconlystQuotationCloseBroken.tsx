import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationCloseBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.493 17.043a11.4 11.4 0 0 0 1.786-3.173 4.1 4.1 0 0 1-2.853-1.36c-1.89-2.125-.982-5.68 1.814-6.453 1.532-.424 3.297.207 4.214 1.506.956 1.356.948 3.188.513 4.79a10.5 10.5 0 0 1-2.538 4.472M5.313 17.043A11.4 11.4 0 0 0 7.1 13.87a4.1 4.1 0 0 1-2.854-1.36c-1.89-2.125-.982-5.68 1.814-6.453 1.532-.424 3.298.207 4.214 1.506.957 1.356.949 3.188.513 4.79a10.5 10.5 0 0 1-2.538 4.472"
    />
  </Svg>
);
export default IconlystQuotationCloseBroken;
