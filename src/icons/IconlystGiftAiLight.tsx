import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 7.142H8.395c-1.106 0-2.002-.927-2.002-2.07C6.393 3.926 7.29 3 8.395 3c2.802 0 3.603 4.142 3.603 4.142"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.996 7.142H15.6c1.105 0 2.001-.927 2.001-2.07C17.601 3.926 16.705 3 15.6 3c-2.802 0-3.604 4.142-3.604 4.142"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.873 20.999H7.127c-2.15 0-3.486-1.602-3.486-3.87V11.01c0-2.268 1.336-3.87 3.487-3.87h9.745c2.15 0 3.486 1.602 3.486 3.87v6.118c0 2.27-1.344 3.87-3.486 3.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.054 16.048-.101-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.226l.101-.273.101.274a3.76 3.76 0 0 0 2.222 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.222 2.225zM15.365 17.29a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179 1.77 1.77 0 0 0 1.176 1.179 1.77 1.77 0 0 0-1.176 1.178"
    />
  </Svg>
);
export default IconlystGiftAiLight;
