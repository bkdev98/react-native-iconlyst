import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasOilStationLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.87 21.885V7.334c0-2.02-1.26-3.45-3.282-3.45H7.799c-2.017 0-3.28 1.43-3.28 3.45v14.55M3.258 21.885h14.875"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.744 7.349h-4.1c-.86 0-1.4.609-1.4 1.47v2.328c0 .862.537 1.471 1.4 1.471h4.1c.863 0 1.4-.609 1.4-1.47V8.82c0-.862-.537-1.471-1.4-1.471"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.294 10.088-.872 2.53M19.395 7.526l1.849 1.849v7.532a1.126 1.126 0 1 1-2.254 0v-1.432c0-.622-.505-1.127-1.126-1.127h-.993"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.858 19.117c-1.256 0-1.822-1.395-1.279-2.245.505-.725 1.28-1.226 1.28-1.226s.774.5 1.279 1.226c.543.85-.024 2.245-1.28 2.245"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGasOilStationLight;
