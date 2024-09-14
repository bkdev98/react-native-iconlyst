import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSofa1Outline = ({
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
      d="M15.47 18.239a.75.75 0 0 1 .945.483l.491 1.524a.75.75 0 0 1-1.427.46l-.492-1.523a.75.75 0 0 1 .484-.944M8.8 18.239a.75.75 0 0 1 .484.944l-.491 1.523a.75.75 0 1 1-1.428-.46l.492-1.524a.75.75 0 0 1 .944-.483"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.255 12.62A2.755 2.755 0 0 1 5.01 9.87h.003A2.876 2.876 0 0 1 7.88 12.74v.838c0 .169.136.305.304.305h7.637a.304.304 0 0 0 .305-.305v-.842a2.874 2.874 0 0 1 2.864-2.864l.003.75v-.75h.024a2.757 2.757 0 0 1 2.73 2.772q.016 1.322-.11 2.637a4.375 4.375 0 0 1-3.989 3.976 9 9 0 0 1-.944.069c-.443.017-1 .03-1.58.04-1.16.02-2.434.028-3.13.028h-.002c-.694 0-1.877 0-2.991-.017-1.063-.015-2.142-.046-2.638-.117a4.38 4.38 0 0 1-4.012-3.98 23 23 0 0 1-.097-2.658m16.74-1.25a1.374 1.374 0 0 0-1.368 1.37v.837c0 .998-.808 1.805-1.805 1.805H8.185a1.805 1.805 0 0 1-1.804-1.805v-.835a1.376 1.376 0 0 0-1.372-1.371c-.693 0-1.254.562-1.254 1.254v.02q-.027 1.25.09 2.496v.005a2.88 2.88 0 0 0 2.658 2.62q.03 0 .06.006c.352.055 1.328.088 2.46.105a210 210 0 0 0 6.077-.011c.576-.01 1.119-.023 1.546-.04q.323-.014.533-.027.104-.008.165-.015l.053-.006h-.002a1 1 0 0 1 .1-.014 2.875 2.875 0 0 0 2.649-2.618v-.007q.12-1.238.104-2.484v-.016a1.257 1.257 0 0 0-1.242-1.268z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.364 4.478a27.3 27.3 0 0 0-6.677 0l-.013.002-.013.001a2.94 2.94 0 0 0-2.676 2.714v.01l-.002.011a27 27 0 0 0-.127 3.464l-1.5.041c-.033-1.217.012-2.435.134-3.646a4.44 4.44 0 0 1 4.027-4.087 28.8 28.8 0 0 1 7.021 0 4.5 4.5 0 0 1 4.027 4.077c.138 1.216.183 2.441.138 3.663l-1.499-.055c.043-1.15 0-2.304-.13-3.448l-.002-.01v-.01A3 3 0 0 0 15.38 4.48h-.009z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.25 7.244a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75M9.24 10.244a.75.75 0 0 1 .75-.75H10a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M13.25 7.244a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75M13.25 10.244a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSofa1Outline;