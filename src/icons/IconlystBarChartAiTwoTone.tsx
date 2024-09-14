import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartAiTwoTone = ({
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
      d="M7.334 9.743v7.323m4.2-2.028v2.028m4.131-3.9v3.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.8 3.5H7.367c-2.94 0-4.783 2.081-4.783 5.027v7.947c0 2.946 1.835 5.026 4.783 5.026H15.8c2.949 0 4.783-2.08 4.783-5.026v-2.947"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.987 8.7.101-.274A3.76 3.76 0 0 1 20.31 6.2l.273-.101-.273-.102a3.76 3.76 0 0 1-2.222-2.224l-.1-.274-.102.274a3.76 3.76 0 0 1-2.221 2.224l-.273.102.273.1a3.76 3.76 0 0 1 2.221 2.226zM12.677 9.941a1.77 1.77 0 0 1 1.176-1.178 1.77 1.77 0 0 1-1.176-1.179A1.77 1.77 0 0 1 11.5 8.763a1.77 1.77 0 0 1 1.177 1.178"
    />
  </Svg>
);
export default IconlystBarChartAiTwoTone;
