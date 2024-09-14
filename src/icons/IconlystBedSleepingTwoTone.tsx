import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedSleepingTwoTone = ({
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
      d="M13.158 3.64h1.643l-1.643 2.285h1.643M16.885 5.199h2.423l-2.423 3.37h2.423"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.902 18.878V20.4M5.328 18.878V20.4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.113 16.791c0-.849 0-1.273.085-1.623a3 3 0 0 1 2.204-2.205c.35-.085.775-.085 1.624-.085H17.2c.85 0 1.273 0 1.623.085a3 3 0 0 1 2.204 2.205c.086.35.086.774.086 1.623 0 .453 0 .68-.046.866a1.6 1.6 0 0 1-1.175 1.175c-.187.046-.414.046-.866.046H5.2c-.453 0-.679 0-.866-.046a1.6 1.6 0 0 1-1.176-1.175c-.045-.187-.045-.413-.045-.866"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.902 11.63v1.291M5.327 12.921V7.843c0-.614 0-.922.089-1.168a1.5 1.5 0 0 1 .903-.903c.246-.089.554-.089 1.168-.089h2.39"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBedSleepingTwoTone;
