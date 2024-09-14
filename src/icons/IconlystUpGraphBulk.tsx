import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpGraphBulk = ({
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
      d="M16.218 2.5H7.784C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.284 5.53h8.433c3.16 0 5.283-2.223 5.283-5.53V8.03c0-3.307-2.122-5.53-5.282-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.118 11.844a.749.749 0 0 1-.919-.528l-.371-1.373-2.712 4.712a.75.75 0 0 1-1.024.276l-2.656-1.527-1.71 2.97a.75.75 0 0 1-1.3-.748l2.084-3.62a.753.753 0 0 1 1.024-.277l2.655 1.528 2.338-4.063-1.378.37a.751.751 0 0 1-.388-1.45l3.124-.838c.031-.01.063-.002.095-.006.064-.01.129-.021.195-.013.067.009.128.037.189.063.03.012.061.014.09.03.06.034.103.084.149.13.021.022.049.036.067.06a.8.8 0 0 1 .135.273l.841 3.112a.75.75 0 0 1-.528.918"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpGraphBulk;
