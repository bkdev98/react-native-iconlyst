import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightAirpodProOutline = ({
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
      fill={props.color}
      d="M11.99 7.454a.75.75 0 0 1-.75.75H9.33a.75.75 0 0 1 0-1.5h1.91a.75.75 0 0 1 .75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.265 12.608c-1.05.756-2.359 1.23-3.784 1.324l1.16 3.918.008.036c.384 1.572-.448 3.305-2.13 3.759a3.036 3.036 0 0 1-3.634-1.862c-1.001-2.65-2.458-7.041-2.649-10.814-.23-3.976 3.065-6.72 6.727-6.72 1.623 0 3.116.501 4.288 1.342.273-.168.586-.277.92-.307a4.34 4.34 0 0 1 3.454 1.183c.41.39.651.928.651 1.507v4.247c0 .508-.181 1.037-.578 1.432a4.35 4.35 0 0 1-3.528 1.254 2.1 2.1 0 0 1-.905-.299m.643-7.632a1 1 0 0 1-.058.078.55.55 0 0 0-.085.293v5.497c0 .283.224.54.542.569a2.85 2.85 0 0 0 2.332-.823.44.44 0 0 0 .102-.164.6.6 0 0 0 .035-.205V5.974a.58.58 0 0 0-.184-.421 2.84 2.84 0 0 0-2.285-.775.6.6 0 0 0-.4.198m-1.565-.19c-.908-.64-2.08-1.036-3.38-1.036-2.966 0-5.4 2.173-5.23 5.138l.001.005c.177 3.523 1.558 7.726 2.553 10.36a1.537 1.537 0 0 0 1.84.944c.793-.214 1.272-1.058 1.07-1.934l-.005-.023-1.437-4.851a.75.75 0 0 1 .824-.956c.103.015.213.016.384.016 1.305 0 2.478-.39 3.384-1.028a2 2 0 0 1-.082-.577V5.347q.002-.295.078-.561"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightAirpodProOutline;
