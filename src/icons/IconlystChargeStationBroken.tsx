import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeStationBroken = ({
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
      d="M3.507 21.248h14.875"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.994 6.712h-4.1c-.86 0-1.4.609-1.4 1.471v2.327c0 .863.537 1.472 1.4 1.472h4.1c.863 0 1.4-.61 1.4-1.472V8.183c0-.862-.537-1.471-1.4-1.471"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.544 9.451-.872 2.53M11.092 18.174l.877-1.61H9.797l.877-1.613"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.12 21.248V6.698c0-2.022-1.26-3.45-3.282-3.45H8.049c-2.017 0-3.28 1.428-3.28 3.45v6.42M4.769 16.327v4.921M17.121 13.71h.992c.622 0 1.127.506 1.127 1.128v1.432a1.127 1.127 0 0 0 2.254 0v-1.883M19.645 6.89l1.848 1.848v3.074"
    />
  </Svg>
);
export default IconlystChargeStationBroken;