import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystElectricChargingOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.44 20.387h1.07a1.463 1.463 0 0 0 0-2.927h-1.07zm1.07 1.5h-1.38a1.19 1.19 0 0 1-1.19-1.189v-3.55c0-.656.533-1.188 1.19-1.188h1.38a2.963 2.963 0 1 1 0 5.927"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.44 20.078a.75.75 0 0 1-.75.75H9.28a.75.75 0 0 1 0-1.5h1.41a.75.75 0 0 1 .75.75m0-2.309a.75.75 0 0 1-.75.75H9.28a.75.75 0 0 1 0-1.5h1.41a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.172 6.197A7.313 7.313 0 0 0 6.83 16.538.75.75 0 0 1 5.77 17.6a8.813 8.813 0 1 1 9.253 2.049.75.75 0 0 1-.513-1.41 7.313 7.313 0 0 0 2.662-12.042"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.417 6.526a.75.75 0 0 1 .223 1.037l-1.19 1.844h2.48a.75.75 0 0 1 .63 1.158l-1.941 2.999a.75.75 0 0 1-1.26-.815l1.192-1.842h-2.479a.75.75 0 0 1-.63-1.157l1.938-3a.75.75 0 0 1 1.037-.224"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystElectricChargingOutline;
