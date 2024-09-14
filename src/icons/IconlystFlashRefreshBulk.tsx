import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashRefreshBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21 11.55a.75.75 0 0 0-.75.75c0 4.549-3.701 8.25-8.25 8.25s-8.25-3.701-8.25-8.25S7.451 4.05 12 4.05c1.658 0 3.262.51 4.611 1.42l-.671.76a.75.75 0 0 0 .487 1.243l2.964.292a.756.756 0 0 0 .63-.242.75.75 0 0 0 .18-.65l-.59-2.977a.75.75 0 0 0-1.299-.351l-.706.799A9.77 9.77 0 0 0 12 2.55c-5.376 0-9.75 4.374-9.75 9.75 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.75-4.374 9.75-9.75a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.63 16.68a.751.751 0 0 0 1.018-.3l2.12-3.894a.752.752 0 0 0-.659-1.11h-2.954l1.516-2.787a.75.75 0 0 0-1.317-.717l-2.12 3.897a.75.75 0 0 0 .66 1.108h2.952l-1.517 2.785a.75.75 0 0 0 .3 1.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashRefreshBulk;
