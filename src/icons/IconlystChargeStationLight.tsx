import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeStationLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.62 21.248V6.698c0-2.022-1.26-3.45-3.282-3.45H7.55c-2.017 0-3.281 1.428-3.281 3.45v14.55m-1.262 0h14.875"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.494 6.712h-4.1c-.86 0-1.4.609-1.4 1.471v2.327c0 .863.537 1.472 1.4 1.472h4.1c.863 0 1.4-.61 1.4-1.472V8.183c0-.862-.537-1.471-1.4-1.471"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.044 9.451-.872 2.53M19.145 6.89l1.849 1.848v7.532a1.126 1.126 0 1 1-2.254 0v-1.432c0-.622-.505-1.127-1.126-1.127h-.993M10.592 18.174l.877-1.61H9.297l.877-1.613"
    />
  </Svg>
);
export default IconlystChargeStationLight;
