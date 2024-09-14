import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasOilStationTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.87 21V6.45c0-2.022-1.26-3.45-3.282-3.45H7.8C5.783 3 4.519 4.428 4.519 6.45V21M3.258 21h14.875"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.744 6.464h-4.1c-.86 0-1.4.609-1.4 1.471v2.327c0 .862.537 1.471 1.4 1.471h4.1c.863 0 1.4-.609 1.4-1.47V7.934c0-.862-.537-1.471-1.4-1.471"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.294 9.203-.872 2.53M19.395 6.642l1.849 1.848v7.532a1.126 1.126 0 1 1-2.254 0V14.59c0-.622-.505-1.127-1.126-1.127h-.993"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.858 18.232c-1.256 0-1.822-1.395-1.279-2.244.505-.726 1.28-1.227 1.28-1.227s.774.5 1.279 1.227c.543.85-.024 2.244-1.28 2.244"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGasOilStationTwoTone;
