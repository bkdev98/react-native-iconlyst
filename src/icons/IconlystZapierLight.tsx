import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZapierLight = ({
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
      d="m5.972 5.996 3.62 3.61M14.39 14.39l3.622 3.611M9.592 14.39l-3.62 3.611M18.01 5.996l-3.622 3.61M20.502 12.005h-5.678M9.156 12.005H3.498M11.988 3.508v5.664M11.988 14.824v5.664"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.39 14.39a6.75 6.75 0 0 0 .002-4.779 6.786 6.786 0 0 0-4.794-.006 6.8 6.8 0 0 0-.439 2.393c0 .815.149 1.623.437 2.386a6.8 6.8 0 0 0 2.397.44 6.8 6.8 0 0 0 2.396-.434"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZapierLight;
