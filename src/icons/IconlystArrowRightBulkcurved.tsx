import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightBulkcurved = ({
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
      d="M3.75 12a1 1 0 0 1 1-1h15a1 1 0 0 1 0 2h-15a1 1 0 0 1-1-1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.175 5.095a1 1 0 1 0-.95 1.76l.003.002.01.006.045.025q.062.033.18.101a23.973 23.973 0 0 1 2.653 1.755c.727.558 1.416 1.171 1.915 1.781.517.634.72 1.13.72 1.474s-.203.84-.72 1.475c-.499.61-1.188 1.223-1.915 1.78a24 24 0 0 1-2.89 1.89 1 1 0 0 0 .949 1.76q.141-.076.281-.157a25.962 25.962 0 0 0 2.877-1.906c.787-.603 1.61-1.324 2.246-2.102.617-.755 1.171-1.703 1.171-2.74s-.554-1.985-1.17-2.74c-.637-.778-1.46-1.498-2.246-2.101a26 26 0 0 0-3.081-2.02l-.056-.03-.015-.009-.005-.002z"
    />
  </Svg>
);
export default IconlystArrowRightBulkcurved;
