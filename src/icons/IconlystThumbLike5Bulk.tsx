import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike5Bulk = ({
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
      fillRule="evenodd"
      d="M6.274 9.203c-.35-.161-1.514-.192-2.557-.2A.714.714 0 0 0 3 9.72v10.867c0 .396.32.716.717.714 1.043-.005 2.207-.036 2.557-.198.41-.19.743-.489.943-.866.222-.4.222-.932.222-1.986v-6.196c0-1.054 0-1.586-.222-1.986a2 2 0 0 0-.943-.865"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.058 9.567h-2.016c-.347 0-.581-.392-.468-.72.69-1.997.887-6.082-2.46-6.148a.4.4 0 0 0-.157.029c-.504.205-.63.46-.735.958-.675 3.041-2.145 4.719-3.484 5.38-.074.037-.093.128-.056.202.421.776.421 1.531.421 2.785v6.159c0 .572 0 1.042-.042 1.458-.02.201.08.399.265.481.938.42 1.917.78 2.896.78h4.949c2.852 0 4.827-1.854 4.827-4.916 0-3.207.233-6.448-3.94-6.448"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThumbLike5Bulk;
