import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBankCardBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.65 21.75H7.393a4.647 4.647 0 0 1-4.643-4.641v-1.58a.75.75 0 0 1 1.5 0v1.58a3.146 3.146 0 0 0 3.143 3.14H8.65a.75.75 0 0 1 0 1.5M17.607 21.75h-1.289a.75.75 0 0 1 0-1.5h1.29a3.146 3.146 0 0 0 3.142-3.141v-1.58a.75.75 0 0 1 1.5 0v1.58a4.647 4.647 0 0 1-4.643 4.64M17.606 2.25h-1.257a.75.75 0 0 0 0 1.5h1.257a3.146 3.146 0 0 1 3.143 3.141v1.58a.75.75 0 0 0 1.5 0v-1.58a4.647 4.647 0 0 0-4.643-4.641M8.682 3.75a.75.75 0 0 0 0-1.5H7.393A4.647 4.647 0 0 0 2.75 6.891v1.58a.75.75 0 0 0 1.5 0v-1.58A3.146 3.146 0 0 1 7.393 3.75z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.965 10.159c.006.11-.085.2-.195.2H7.22c-.11 0-.2-.09-.195-.2.078-1.524 1.045-2.78 2.695-2.78h5.56c1.65 0 2.608 1.259 2.685 2.78M7.02 12.059c0-.11.09-.2.2-.2h10.55c.11 0 .2.09.2.2v1.76c0 1.65-1.1 2.8-2.69 2.8H9.72c-1.59 0-2.7-1.15-2.7-2.8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanBankCardBulk;
