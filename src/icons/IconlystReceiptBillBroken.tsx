import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillBroken = ({
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
      d="M19.238 11.999V4.715a1.134 1.134 0 0 0-1.623-1.024l-.715.343a1.68 1.68 0 0 1-1.36.04L13.52 3.25a3.37 3.37 0 0 0-2.543 0l-2.022.824a1.68 1.68 0 0 1-1.36-.04l-.71-.34a1.133 1.133 0 0 0-1.623 1.023v14.568a1.133 1.133 0 0 0 1.623 1.023l.715-.342a1.68 1.68 0 0 1 1.359-.04l2.019.824a3.36 3.36 0 0 0 2.543 0l2.022-.825a1.69 1.69 0 0 1 1.36.041l.71.34a1.133 1.133 0 0 0 1.624-1.023v-3.642M9.031 8.574h2.523m-2.523 3.23h6.435m-6.435 3.622h4.479"
    />
  </Svg>
);
export default IconlystReceiptBillBroken;
