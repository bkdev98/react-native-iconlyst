import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatPharmacyLight = ({
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
      d="M10.804 20.587c-1.473.448-2.838.614-3.65.63.072-1.459.267-3.123.634-5.2.307-1.739-.958-2.975-2.428-2.975-1.952 0-2.837-2.345-2.56-3.463 1.014 0 1.71-.546 2.132-1.573.731-1.78 2.21-2.235 3.95-2.235V2.938c3.112 1.289 5.54 3.795 6.16 7.192M8.277 9.086v.015"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.513 21.216h-1.978a.564.564 0 0 1-.564-.564v-1.607h-1.61a.564.564 0 0 1-.563-.564v-1.983c0-.311.253-.564.564-.564h1.61v-1.606c0-.311.252-.564.563-.564h1.978c.31 0 .564.253.564.564v1.606h1.61c.31 0 .563.253.563.564v1.983a.564.564 0 0 1-.564.564h-1.61v1.607a.564.564 0 0 1-.563.564"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCatPharmacyLight;
