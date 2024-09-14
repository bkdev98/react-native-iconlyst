import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen2Bulk = ({
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
      d="M10.449 7.685H5.5a3 3 0 0 0-3 3v3.864a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-3.864a3 3 0 0 0-3-3h-.943a3.991 3.991 0 1 1-7.108 0"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.885 9.503a2.119 2.119 0 1 1 4.237.001 2.119 2.119 0 0 1-4.237-.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.003 4.762a4.742 4.742 0 1 0 .001 9.483 4.742 4.742 0 0 0-.001-9.483m-3.241 4.74a3.242 3.242 0 1 1 6.483.002 3.242 3.242 0 0 1-6.483-.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M5.45 11.459a.75.75 0 0 1 .75-.75h1.415a.75.75 0 0 1 0 1.5H6.199a.75.75 0 0 1-.75-.75M5.45 14.065a.75.75 0 0 1 .75-.75h3.384a.75.75 0 0 1 0 1.5H6.2a.75.75 0 0 1-.75-.75M4.85 18.187l.38-.65q.133.012.268.012h1.464l-.817 1.395a.75.75 0 1 1-1.294-.757M17.796 18.944l-.817-1.395h1.519q.108 0 .214-.008l.378.646a.75.75 0 0 1-1.294.757"
    />
  </Svg>
);
export default IconlystProjectorScreen2Bulk;
