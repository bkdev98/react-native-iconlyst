import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeUpBold = ({
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
      d="m12.369 9.124-.071-4.582a1.771 1.771 0 0 0-3.543.026V14.73l-1.267-1.84a1.936 1.936 0 0 0-2.287-.708c-.943.361-1.448 1.386-1.105 2.336.642 1.77 1.66 3.747 2.97 5.374 2.063 2.567 8.366 2.395 10.621.14 1.768-1.767 2.76-5.37 1.752-8.094-1.002-2.705-4.591-2.577-7.07-2.814M16.878 5.03l.102-.102v2.333a.79.79 0 0 0 1.58 0V4.927l.102.102a.79.79 0 1 0 1.118-1.118l-1.462-1.46a.8.8 0 0 0-.249-.163.793.793 0 0 0-.84.154l-.02.02-1.45 1.45a.79.79 0 0 0 1.12 1.117"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeUpBold;
