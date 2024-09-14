import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaBulk = ({
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
      d="m17.051 3.89-3.37 3.016h-3.336L7.054 3.884a.749.749 0 1 1 1.014-1.105l3.936 3.615 4.047-3.622a.75.75 0 1 1 1 1.118"
    />
    <Path
      fill={props.color}
      d="M2.5 11.435a4.535 4.535 0 0 1 4.529-4.53h9.943a4.534 4.534 0 0 1 4.528 4.53v5.456a4.534 4.534 0 0 1-4.528 4.529H7.029A4.535 4.535 0 0 1 2.5 16.89z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystOldTvAntennaBulk;
