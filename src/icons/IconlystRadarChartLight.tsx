import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadarChartLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.29 3.852a2.06 2.06 0 0 1 2.42 0l6.941 5.043a2.06 2.06 0 0 1 .748 2.302l-2.651 8.16a2.06 2.06 0 0 1-1.958 1.422H8.21a2.06 2.06 0 0 1-1.958-1.423l-2.651-8.16a2.06 2.06 0 0 1 .748-2.301z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M16.038 10.264 12.86 7.972a1 1 0 0 0-1.356.176l-2.27 2.756a1 1 0 0 0-.223.531l-.437 4.151a1 1 0 0 0 .974 1.105l5.107.105a1 1 0 0 0 1.007-.837l.777-4.721a1 1 0 0 0-.401-.974Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3.793v9.204m8.754-2.844L12.5 12.997m5.41 7.447-5.41-7.447m-5.41 7.447 5.41-7.447m-8.753-2.844 8.753 2.844"
    />
  </Svg>
);
export default IconlystRadarChartLight;
