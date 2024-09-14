import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaleManOutline = ({
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
      d="m18.187 4.562-2.368.005a.751.751 0 0 1-.003-1.5l4.18-.009a.8.8 0 0 1 .204.029.75.75 0 0 1 .547.79l-.01 4.112a.75.75 0 0 1-1.5-.003l.006-2.359-2.893 2.894A7.348 7.348 0 1 1 15.3 7.448zm-7.589 14.38a5.848 5.848 0 1 0 0-11.695 5.848 5.848 0 0 0 0 11.695"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMaleManOutline;
