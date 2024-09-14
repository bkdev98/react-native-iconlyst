import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillCloseBroken = ({
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
      d="M9.879 14.453h4.688M13.746 11.436l-3.002-3m.002 3.001 3.002-3.001M4.84 13.051l-.008 6.126a1.203 1.203 0 0 0 1.723 1.087l.754-.36a1.78 1.78 0 0 1 1.444-.044l2.146.875a3.57 3.57 0 0 0 2.7 0l2.143-.875c.466-.19.99-.175 1.444.042l.76.364c.798.383 1.723-.2 1.722-1.087l-.01-12.254C19.658 4.502 18.31 3 15.892 3h-7.3C6.169 3 4.85 4.502 4.85 6.925v2.412"
    />
  </Svg>
);
export default IconlystReceiptBillCloseBroken;
