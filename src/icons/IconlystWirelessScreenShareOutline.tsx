import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessScreenShareOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.258 4.897C4.594 5.61 4.19 6.651 4.19 7.944a.75.75 0 0 1-1.5 0c0-1.604.504-3.034 1.47-4.07.97-1.041 2.353-1.624 3.984-1.624h8.297c1.635 0 3.018.582 3.989 1.625.965 1.036 1.466 2.466 1.466 4.07v7.816c0 1.604-.501 3.034-1.466 4.07-.97 1.042-2.354 1.625-3.99 1.625a.75.75 0 0 1 0-1.5c1.265 0 2.235-.442 2.892-1.147.663-.712 1.064-1.754 1.064-3.048V7.944c0-1.293-.401-2.336-1.064-3.047-.657-.706-1.626-1.147-2.89-1.147H8.144c-1.26 0-2.229.44-2.887 1.147m-1.9 8.28a.75.75 0 0 1 .75-.75 8.116 8.116 0 0 1 8.116 8.116.75.75 0 0 1-1.5 0 6.616 6.616 0 0 0-6.615-6.617.75.75 0 0 1-.75-.75m0 3.671a.75.75 0 0 1 .75-.75 4.443 4.443 0 0 1 4.444 4.445.75.75 0 0 1-1.5 0 2.943 2.943 0 0 0-2.943-2.945.75.75 0 0 1-.75-.75M4.108 19.501a1 1 0 0 1 1 1v.041a1 1 0 1 1-2 0v-.041a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessScreenShareOutline;
