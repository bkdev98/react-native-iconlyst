import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperUploadOutline = ({
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
      d="M13.976 2q.064 0 .126.01l.135.002c.204 0 .4.083.541.23l5.066 5.277a.75.75 0 0 1 .208.519v9.19a4.594 4.594 0 0 1-4.453 4.638H7.46a4.563 4.563 0 0 1-4.457-4.44V6.49C3.06 4.01 5.107 2.01 7.57 2.01h6.28a1 1 0 0 1 .126-.01m-.75 1.511H7.572A3.087 3.087 0 0 0 4.501 6.51v10.719a3.064 3.064 0 0 0 2.99 3.138h8.082a3.097 3.097 0 0 0 2.98-3.133v-8.25l-2.01.001a3.33 3.33 0 0 1-3.317-3.325zM11.141 9.16c.207 0 .394.084.53.22h.001l2.346 2.357a.75.75 0 0 1-1.063 1.058l-1.065-1.07v4.226a.75.75 0 0 1-1.5 0v-4.226l-1.063 1.07a.747.747 0 0 1-1.06.002.75.75 0 0 1-.002-1.06L10.61 9.38l.033-.031.045-.037-.078.068a.743.743 0 0 1 .532-.22m3.583-4.807V5.66c0 1.004.817 1.822 1.82 1.825h1.185z"
    />
  </Svg>
);
export default IconlystPaperUploadOutline;
