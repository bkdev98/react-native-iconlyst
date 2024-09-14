import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashSwapOutline = ({
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
      d="M12.634 7.959a.75.75 0 0 1 .3 1.017l-1.248 2.29h2.419a.75.75 0 0 1 .659 1.11l-1.85 3.402a.75.75 0 0 1-1.318-.717l1.247-2.294h-2.42a.75.75 0 0 1-.658-1.109l1.852-3.4a.75.75 0 0 1 1.017-.3M6.775 14.836a.75.75 0 0 1 .562.9l-.628 2.713a.75.75 0 0 1-.9.562l-2.728-.632a.75.75 0 1 1 .338-1.46l1.998.461.458-1.982a.75.75 0 0 1 .9-.562"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.637 4.175a7.934 7.934 0 0 0-7.112 13.32.75.75 0 1 1-1.078 1.043A9.434 9.434 0 0 1 13.9 2.698a.75.75 0 0 1-.264 1.477M17.79 5.554a.75.75 0 0 1 .9-.562l2.728.63a.75.75 0 1 1-.337 1.462l-1.998-.462-.459 1.983a.75.75 0 1 1-1.461-.339z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.993 5.445a.75.75 0 0 1 1.06.018c3.558 3.68 3.534 9.548-.089 13.198a9.42 9.42 0 0 1-8.365 2.64.75.75 0 1 1 .265-1.476 7.934 7.934 0 0 0 7.112-13.32.75.75 0 0 1 .017-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashSwapOutline;
