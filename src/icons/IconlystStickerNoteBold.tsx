import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerNoteBold = ({
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
      d="M20.185 16.32c-.793-.002-1.728 0-2.401.008-1.067 0-1.946.888-1.946 1.966v2.569c0 .42.505.628.793.325l1.955-2.053 1.93-2.028a.464.464 0 0 0-.331-.786"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.71 2.254H9.039c-2.208 0-4.038 1.598-4.449 3.708h-.892a.749.749 0 1 0 0 1.5h3.33a.74.74 0 0 0 .608-.34c.06.109.103.227.103.36 0 .41-.34.75-.75.75H4.684a.2.2 0 0 0-.2.2v2.49h-.786a.749.749 0 1 0 0 1.5h3.33a.74.74 0 0 0 .608-.335c.06.108.103.225.103.355 0 .42-.34.75-.75.75H4.684a.2.2 0 0 0-.2.2v2.5h-.786a.749.749 0 1 0 0 1.5h3.33a.74.74 0 0 0 .608-.34c.06.109.103.227.103.36 0 .41-.34.75-.75.75H4.807a.192.192 0 0 0-.19.235c.466 1.916 2.176 3.349 4.219 3.349h5.153a.445.445 0 0 0 .444-.45V18.16c0-1.783 1.457-3.245 3.223-3.255h2.962a.435.435 0 0 0 .434-.44V6.63c0-2.417-1.939-4.376-4.342-4.376"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerNoteBold;
