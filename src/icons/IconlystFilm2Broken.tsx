import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.252 21h-4.17c-2.76 0-4.711-1.72-4.711-4.485V7.483C3.37 4.719 5.32 3 8.083 3h8.338c2.76 0 4.712 1.727 4.712 4.483v9.033c0 2.764-1.951 4.484-4.712 4.484h-.737M3.37 16.476h3.786M3.37 7.57h3.786M7.16 3.117v17.767M17.34 20.884V3.117M21.106 16.476h-3.763m3.762-8.906h-3.762M13.673 12.023H3.368m17.738 0h-3.67"
    />
  </Svg>
);
export default IconlystFilm2Broken;
