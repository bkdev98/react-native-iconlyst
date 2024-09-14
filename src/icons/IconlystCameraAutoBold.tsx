import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraAutoBold = ({
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
      d="M11.385 13.3h1.227l-.614-1.405z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.742 16.3a.75.75 0 0 1-.988-.388l-.487-1.114H10.73l-.487 1.114a.75.75 0 1 1-1.375-.6l.679-1.553.001-.005 1.762-4.032c.239-.546 1.135-.547 1.375 0l1.761 4.028.006.014.677 1.549a.75.75 0 0 1-.387.986m3.214-9.449a1.38 1.38 0 0 1-.943-.418c-.044-.05-.223-.272-.637-1.05a2.73 2.73 0 0 0-2.411-1.445h-3.912c-.995 0-1.911.54-2.392 1.41-.436.79-.617 1.024-.665 1.078a1.38 1.38 0 0 1-.934.43A3.567 3.567 0 0 0 2.5 10.416v5.642a4.61 4.61 0 0 0 4.606 4.607h9.787a4.613 4.613 0 0 0 4.607-4.608v-5.644c0-1.964-1.598-3.56-3.544-3.56"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraAutoBold;
