import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.043 8.419v5.51h-1.5v-5.51z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.498 10.424h5.59v1.5h-5.59zM10.171 4a3.67 3.67 0 1 0-.002 7.34A3.67 3.67 0 0 0 10.171 4M5 7.67a5.17 5.17 0 1 1 10.34 0A5.17 5.17 0 0 1 5 7.67M4.084 19.685c1.784.937 3.86 1.32 6.12 1.315h.003c2.258.006 4.335-.378 6.119-1.315-1.024-2.446-3.311-3.623-6.12-3.616h-.003c-2.811-.007-5.094 1.167-6.119 3.616m6.121-5.116c-3.5-.009-6.616 1.62-7.758 5.23l-.177.56.502.306c2.204 1.343 4.767 1.841 7.433 1.835 2.666.006 5.229-.492 7.433-1.835l.502-.306-.177-.56c-1.14-3.607-4.262-5.238-7.758-5.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddUserOutlinesharp;
