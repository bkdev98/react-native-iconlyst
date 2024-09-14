import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaBold = ({
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
      d="M16.972 6.906h-3.291l3.37-3.016a.75.75 0 0 0-1-1.118l-4.047 3.622-3.936-3.615a.749.749 0 1 0-1.014 1.105l3.291 3.022H7.029A4.535 4.535 0 0 0 2.5 11.435v5.456a4.535 4.535 0 0 0 4.529 4.529h9.943a4.534 4.534 0 0 0 4.528-4.53v-5.455a4.534 4.534 0 0 0-4.528-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOldTvAntennaBold;
