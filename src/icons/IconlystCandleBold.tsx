import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandleBold = ({
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
      d="M8.308 4.82h-.342V3a.75.75 0 0 0-1.5 0v1.82h-.344a2.104 2.104 0 0 0-2.103 2.1v9.89c0 1.159.944 2.1 2.103 2.1h.344V21a.75.75 0 0 0 1.5 0v-2.09h.342c1.16 0 2.104-.942 2.104-2.1V6.92c0-1.159-.944-2.1-2.104-2.1M18.877 7.72h-.342V3a.75.75 0 0 0-1.5 0v4.72h-.343c-1.16 0-2.104.942-2.104 2.101v5.559a2.11 2.11 0 0 0 2.104 2.111h.343V21a.75.75 0 0 0 1.5 0v-3.509h.342a2.11 2.11 0 0 0 2.104-2.111V9.821a2.105 2.105 0 0 0-2.104-2.101"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandleBold;
