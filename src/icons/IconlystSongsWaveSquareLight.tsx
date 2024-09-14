import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveSquareLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 16.218V7.783C3 4.835 5.081 3 8.026 3h7.948C18.919 3 21 4.835 21 7.783v8.435C21 19.166 18.919 21 15.974 21H8.026C5.081 21 3 19.156 3 16.218M9.269 8.895v6.21M6.537 10.838v2.324M17.462 10.838v2.324M14.73 8.895v6.21M12 7.098v9.805"
    />
  </Svg>
);
export default IconlystSongsWaveSquareLight;
