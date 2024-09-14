import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshLoadLeftOutline = ({
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
      d="M11.542 3.506a.75.75 0 0 1-.07 1.058l-.008.007a.75.75 0 0 1-.988-1.129l.007-.006a.75.75 0 0 1 1.059.07M7.66 5.03a.75.75 0 0 1 0 1.06l-.008.008a.75.75 0 0 1-1.06-1.06l.007-.008a.75.75 0 0 1 1.06 0m-2.505 3.31a.75.75 0 0 1-.07 1.059l-.008.006a.75.75 0 1 1-.988-1.129l.008-.006a.75.75 0 0 1 1.058.07M4.549 12.4a.75.75 0 0 1 0 1.061l-.007.007a.75.75 0 1 1-1.06-1.06l.007-.008a.75.75 0 0 1 1.06 0m1.593 3.885a.75.75 0 0 1-.07 1.058l-.008.007a.75.75 0 1 1-.987-1.129l.007-.006a.75.75 0 0 1 1.058.07M20.61 4.29a.75.75 0 0 1-.739.76l-3.923.054L16 9.002a.75.75 0 0 1-1.5.02l-.062-4.647a.75.75 0 0 1 .74-.76l4.673-.064a.75.75 0 0 1 .76.74"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.5 4.341a.75.75 0 0 1 .987-.388c4.34 1.89 6.4 6.919 4.6 11.328-1.82 4.489-6.938 6.648-11.427 4.818a.75.75 0 1 1 .567-1.389 7.26 7.26 0 0 0 9.47-3.993l.001-.002c1.492-3.654-.215-7.821-3.81-9.387a.75.75 0 0 1-.388-.987"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshLoadLeftOutline;
