import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunTemperatureLight = ({
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
      d="M5.157 6v6.022c-1.208.913-2 2.347-2 3.978a5 5 0 0 0 10 0c0-1.63-.793-3.065-2-3.978V6a3 3 0 0 0-6 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.629 16a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.156 8v6.527M16.596 3v.682m0 7.589v.682m4.477-4.476h-.683m-.628-3.166-.483.483m-5.366 5.366-.482.482m6.33 0-.482-.482m-5.366-5.366-.482-.483"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.595 5.652a1.825 1.825 0 1 1 0 3.65 1.825 1.825 0 0 1 0-3.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunTemperatureLight;
