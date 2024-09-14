import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBankCardBold = ({
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
      d="M8.15 21.75H6.893a4.647 4.647 0 0 1-4.643-4.641v-1.58a.75.75 0 0 1 1.5 0v1.58a3.146 3.146 0 0 0 3.143 3.14H8.15a.75.75 0 0 1 0 1.5M17.107 21.75h-1.289a.75.75 0 0 1 0-1.5h1.29a3.146 3.146 0 0 0 3.142-3.141v-1.58a.75.75 0 0 1 1.5 0v1.58a4.647 4.647 0 0 1-4.643 4.64M17.106 2.25h-1.257a.75.75 0 0 0 0 1.5h1.257a3.146 3.146 0 0 1 3.143 3.141v1.58a.75.75 0 0 0 1.5 0v-1.58a4.647 4.647 0 0 0-4.643-4.641M8.182 3.75a.75.75 0 0 0 0-1.5H6.893A4.647 4.647 0 0 0 2.25 6.891v1.58a.75.75 0 0 0 1.5 0v-1.58A3.146 3.146 0 0 1 6.893 3.75zM17.465 10.16c.006.11-.084.2-.195.2H6.72c-.11 0-.2-.09-.195-.2.078-1.524 1.045-2.78 2.695-2.78h5.56c1.65 0 2.608 1.259 2.685 2.78M6.52 12.06c0-.11.09-.2.2-.2h10.55c.11 0 .2.09.2.2v1.76c0 1.65-1.1 2.8-2.69 2.8H9.22c-1.59 0-2.7-1.15-2.7-2.8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanBankCardBold;
