import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletFavoriteBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.04 11.36c0 .42-.34.75-.75.75h-.01a.749.749 0 1 1 0-1.5c.42 0 .76.34.76.75m-2.63.06c0 .98.8 1.78 1.78 1.78h4.01a.3.3 0 0 0 .3-.3V9.93a.3.3 0 0 0-.3-.3h-4.01c-.98 0-1.78.81-1.78 1.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.91 11.42a3.29 3.29 0 0 1 3.28-3.29h4.008a.29.29 0 0 0 .292-.301 5.445 5.445 0 0 0-5.43-5.099H7.93c-2.99 0-5.43 2.44-5.43 5.44v6.174c0 .21.214.36.42.318.264-.053.537-.078.803-.11a.3.3 0 0 0 .227-.164l.34-.697a2.273 2.273 0 0 1 3.05-1.03c.42.2.77.53 1 .96.02.02.03.04.04.07l.35.698a.3.3 0 0 0 .226.163l.774.109c.58.08 1.13.4 1.5.89.71.91.59 2.27-.3 3.06l-.485.469a.29.29 0 0 0-.085.267c.046.232.101.468.13.704.02.165.154.3.32.3h5.25c3.023 0 5.286-2.444 5.433-5.35a.29.29 0 0 0-.293-.3h-4.01c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.58 17.81c-.23.24-.327.564-.27.878l.119.668-.635-.331a1.03 1.03 0 0 0-.917.01l-.625.327.118-.675c.055-.316-.042-.635-.293-.9l-.49-.471.723-.105a1.03 1.03 0 0 0 .717-.547l.312-.626.302.605c.134.293.397.5.769.576l.68.098zm1.726-1.835-1.423-.202-.642-1.286-.014-.03a1 1 0 0 0-.445-.421 1 1 0 0 0-.733-.065.98.98 0 0 0-.614.516l-.64 1.284-1.44.206a1.06 1.06 0 0 0-.558.288 1 1 0 0 0 .015 1.425l1.036.994-.245 1.397a1 1 0 0 0 .1.653 1.014 1.014 0 0 0 1.359.42l1.284-.672 1.267.662a.96.96 0 0 0 .615.107.99.99 0 0 0 .853-1.158l-.247-1.41 1-.967a.994.994 0 0 0 .132-1.355 1 1 0 0 0-.66-.386"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletFavoriteBold;
