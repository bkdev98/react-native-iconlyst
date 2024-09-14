import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp6Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.71 11.608-.889-1.651a.7.7 0 0 1-.218.044H9.39c-.076 0-.145-.022-.214-.043l-.89 1.65zM11.15 6.3 9.962 8.5h4.074L12.85 6.3l.84-1.56c.2-.36.06-.82-.3-1.02a.757.757 0 0 0-1.02.31l-.37.69-.37-.69a.745.745 0 0 0-1.01-.31c-.37.2-.51.66-.31 1.02zM9.784 22.11h4.424l-2.212-4.102z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21 20.61h-.44l-4.062-7.54c-.062.016-.122.038-.189.038H7.751a.7.7 0 0 1-.247-.05L3.43 20.61H3a.749.749 0 1 0 0 1.5h5.08l3.256-6.036a.749.749 0 0 1 1.32 0l3.256 6.035H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp6Bold;
