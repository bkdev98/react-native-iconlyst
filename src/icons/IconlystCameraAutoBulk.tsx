import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraAutoBulk = ({
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
      d="M17.956 6.852a1.38 1.38 0 0 1-.943-.42c-.044-.05-.223-.272-.637-1.049a2.73 2.73 0 0 0-2.411-1.445h-3.912c-.995 0-1.911.54-2.392 1.41-.436.79-.617 1.024-.665 1.078a1.38 1.38 0 0 1-.934.43A3.567 3.567 0 0 0 2.5 10.416v5.642a4.61 4.61 0 0 0 4.606 4.607h9.787a4.613 4.613 0 0 0 4.607-4.608v-5.644c0-1.964-1.598-3.56-3.544-3.56"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.742 16.3a.75.75 0 0 1-.988-.388l-.487-1.114H10.73l-.487 1.114a.75.75 0 1 1-1.375-.6l.68-1.554v-.004l1.762-4.033c.24-.546 1.135-.547 1.375 0l1.761 4.028.003.007.003.007.677 1.55a.75.75 0 0 1-.387.986m-2.13-3h-1.227l.613-1.405z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraAutoBulk;
