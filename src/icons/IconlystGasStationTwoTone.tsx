import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasStationTwoTone = ({
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
      d="M17.12 21.248V6.698c0-2.022-1.26-3.45-3.282-3.45H8.049c-2.017 0-3.28 1.428-3.28 3.45v14.55M3.508 21.248h14.875"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.645 6.89 1.849 1.848v7.532a1.126 1.126 0 1 1-2.254 0v-1.432c0-.622-.505-1.127-1.126-1.127h-.993M9.71 17.745h2.474"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.894 6.712h4.1c.863 0 1.4.609 1.4 1.471v2.327c0 .863-.537 1.472-1.4 1.472h-4.1c-.863 0-1.4-.61-1.4-1.472V8.183c0-.862.54-1.471 1.4-1.471"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.544 9.451-.872 2.53"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGasStationTwoTone;
