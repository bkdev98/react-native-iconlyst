import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.976 2q.064 0 .126.01l.136.002c.204 0 .4.083.541.23l5.065 5.277a.75.75 0 0 1 .21.519v9.166a4.617 4.617 0 0 1-4.45 4.66l-8.019.002h-.109a4.586 4.586 0 0 1-4.474-4.463V6.49c.057-2.481 2.106-4.48 4.57-4.48h6.277a1 1 0 0 1 .127-.01m-.75 1.511H7.572A3.087 3.087 0 0 0 4.501 6.51v10.695a3.087 3.087 0 0 0 3.01 3.162h8.063c1.67-.07 2.991-1.456 2.98-3.156V8.983l-2.01.001a3.33 3.33 0 0 1-3.318-3.325zm.563 11.097a.75.75 0 0 1 0 1.5h-5.4a.75.75 0 0 1 0-1.5zm-2.045-3.752a.75.75 0 0 1 0 1.5H8.388a.75.75 0 0 1 0-1.5zm2.981-6.504V5.66c0 1.004.818 1.822 1.82 1.825h1.186z"
    />
  </Svg>
);
export default IconlystPaperOutline;
