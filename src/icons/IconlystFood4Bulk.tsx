import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood4Bulk = ({
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
      d="M3 16.672h18a.75.75 0 0 1 0 1.5h-.314l-.107.352a3.08 3.08 0 0 1-2.946 2.183H6.368a3.08 3.08 0 0 1-2.945-2.183l-.108-.352H3a.75.75 0 0 1 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.087 5.206a1.913 1.913 0 1 1 3.633.836c4.023.825 6.988 4.487 6.775 8.755a.5.5 0 0 1-.5.476H4.006a.5.5 0 0 1-.5-.476c-.213-4.268 2.752-7.93 6.774-8.755a1.9 1.9 0 0 1-.192-.836M12 4.793a.413.413 0 1 0 0 .825.413.413 0 0 0 0-.825"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFood4Bulk;
