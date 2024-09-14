import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillCheckLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.936 19.902.76.364c.798.383 1.723-.2 1.722-1.087l-.01-12.254C19.408 4.502 18.06 3 15.642 3h-7.3C5.919 3 4.6 4.502 4.6 6.925l-.018 12.252a1.203 1.203 0 0 0 1.723 1.087l.754-.36a1.78 1.78 0 0 1 1.444-.044l2.146.875a3.57 3.57 0 0 0 2.7 0l2.143-.875c.466-.19.99-.175 1.444.042M9.256 14.453h5.108"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.666 9.839 1.542 1.542 3.156-3.156"
    />
  </Svg>
);
export default IconlystReceiptBillCheckLight;
