import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeavesBold = ({
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
      d="M13.638 12.085h4.145a2.056 2.056 0 0 1 2.042 2.295l-.154 1.326h-8.568a.75.75 0 1 0 0 1.5h8.393l-.287 2.47a2.056 2.056 0 0 1-2.043 1.818H8.601a2.055 2.055 0 0 1-2.043-1.818L5.94 14.38a2.056 2.056 0 0 1 2.043-2.295h4.149c0-.378.001-.744.003-.878-2.137-.065-4.018-.752-5.374-2.02C5.248 7.775 4.47 5.714 4.658 3.234a.75.75 0 0 1 .687-.691 9.5 9.5 0 0 1 2.608.125c2.165.428 4.03 1.896 4.921 3.872.88-1.988 2.784-3.447 4.938-3.872a9.5 9.5 0 0 1 2.608-.125.75.75 0 0 1 .687.69c.189 2.48-.59 4.542-2.103 5.956-1.354 1.265-3.232 1.953-5.364 2.02 0 .134 0 .499-.002.877"
    />
  </Svg>
);
export default IconlystLeavesBold;
