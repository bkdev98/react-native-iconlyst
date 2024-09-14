import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerNoteBulk = ({
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
      d="M16.71 2.254H9.039c-2.208 0-4.038 1.598-4.449 3.708h-.892a.749.749 0 1 0 0 1.5h3.33a.74.74 0 0 0 .608-.34c.06.109.103.227.103.36 0 .41-.34.75-.75.75H4.484v2.69h-.786a.749.749 0 1 0 0 1.5h3.33a.74.74 0 0 0 .608-.335c.06.108.103.225.103.355 0 .42-.34.75-.75.75H4.484v2.7h-.786a.749.749 0 1 0 0 1.5h3.33a.74.74 0 0 0 .608-.34c.06.109.103.227.103.36 0 .41-.34.75-.75.75H4.566c.379 2.032 2.144 3.584 4.27 3.584h5.153a.445.445 0 0 0 .444-.45V18.16c0-1.783 1.457-3.245 3.223-3.255h2.962a.435.435 0 0 0 .434-.44V6.63c0-2.417-1.939-4.376-4.342-4.376"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.185 16.322c-.793-.003-1.728 0-2.401.006-1.067 0-1.946.889-1.946 1.967v2.568c0 .42.505.628.793.326l1.955-2.053c.712-.748 1.42-1.494 1.93-2.028a.464.464 0 0 0-.331-.787"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerNoteBulk;
