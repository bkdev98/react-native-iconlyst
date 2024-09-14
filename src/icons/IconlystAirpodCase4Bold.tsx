import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase4Bold = ({
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
      d="M3.699 7.317A4.817 4.817 0 0 1 8.516 2.5h6.968a4.817 4.817 0 0 1 4.817 4.817v9.365a4.82 4.82 0 0 1-4.817 4.818H8.516a4.82 4.82 0 0 1-4.817-4.818zm3.537.847a.75.75 0 0 1 .75-.75h8.027a.75.75 0 1 1 0 1.5H7.986a.75.75 0 0 1-.75-.75m5.13 3.185a.75.75 0 0 1 .3 1.017l-.794 1.46h1.517a.75.75 0 0 1 .658 1.108L12.65 17.5a.75.75 0 1 1-1.317-.718l.793-1.455h-1.515a.75.75 0 0 1-.66-1.109l1.397-2.568a.75.75 0 0 1 1.017-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodCase4Bold;
