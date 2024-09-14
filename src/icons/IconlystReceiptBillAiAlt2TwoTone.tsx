import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillAiAlt2TwoTone = ({
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
      d="m16.936 19.902.76.364c.798.383 1.723-.2 1.722-1.087l-.01-12.254C19.408 4.502 18.06 3 15.642 3h-7.3C5.919 3 4.6 4.502 4.6 6.925l-.018 12.252a1.203 1.203 0 0 0 1.723 1.087l.754-.36a1.78 1.78 0 0 1 1.444-.044l2.146.875a3.57 3.57 0 0 0 2.7 0l2.143-.875c.466-.19.99-.175 1.444.042"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.287 13.421-.101-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.102a3.76 3.76 0 0 0 2.222-2.225l.1-.273.102.273a3.76 3.76 0 0 0 2.221 2.225l.273.101-.273.102a3.76 3.76 0 0 0-2.221 2.225zM15.132 15.778a1.77 1.77 0 0 0-1.176-1.178 1.77 1.77 0 0 0 1.176-1.179A1.77 1.77 0 0 0 16.31 14.6a1.77 1.77 0 0 0-1.177 1.178"
    />
  </Svg>
);
export default IconlystReceiptBillAiAlt2TwoTone;
