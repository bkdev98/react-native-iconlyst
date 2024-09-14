import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerConnectedLight = ({
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
      d="M18.158 6.315h.948c1.046 0 1.894.849 1.894 1.895v1.895A1.895 1.895 0 0 1 19.106 12h-.948M18.158 12h.948c1.046 0 1.894.848 1.894 1.895v1.895a1.895 1.895 0 0 1-1.894 1.894h-.948"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.895 3.474h9.421a2.842 2.842 0 0 1 0 5.684H5.895a2.842 2.842 0 0 1 0-5.684M6.672 6.315h.002M11.592 6.315h1.952"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.895 9.158h9.421a2.842 2.842 0 0 1 0 5.684H5.895a2.842 2.842 0 1 1 0-5.684M6.672 12h.002M11.592 12h1.952M5.895 14.843h9.421a2.842 2.842 0 1 1 0 5.684H5.895a2.842 2.842 0 1 1 0-5.684M6.672 17.685h.002M11.592 17.685h1.952"
    />
  </Svg>
);
export default IconlystServerConnectedLight;
