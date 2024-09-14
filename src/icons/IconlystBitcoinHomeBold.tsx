import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinHomeBold = ({
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
      d="M11.068 10.966v1.26h1.235a.62.62 0 0 0 .466-.206.62.62 0 0 0 .158-.482c-.03-.322-.33-.572-.683-.572zM12.244 13.726h-1.176v1.26h1.235a.632.632 0 0 0 .624-.698c-.03-.31-.336-.562-.683-.562"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.42 14.144a2.15 2.15 0 0 1-.545 1.644 2.13 2.13 0 0 1-1.372.676v.081a.75.75 0 1 1-1.5 0v-.06h-.686a.75.75 0 0 1-.75-.75v-5.52a.75.75 0 0 1 .75-.75h.686v-.06a.75.75 0 0 1 1.5 0v.084c1.003.121 1.823.91 1.917 1.906a2.12 2.12 0 0 1-.512 1.592c.28.321.47.717.512 1.157m7.214-4L13.94 3.82a3.084 3.084 0 0 0-3.884.003l-7.69 6.32a1 1 0 0 0 1.268 1.545l.375-.308 1.14 6.78a3.23 3.23 0 0 0 3.196 2.705h7.307a3.23 3.23 0 0 0 3.198-2.706l1.14-6.78.375.31c.186.152.41.226.634.226a.999.999 0 0 0 .635-1.772"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinHomeBold;
