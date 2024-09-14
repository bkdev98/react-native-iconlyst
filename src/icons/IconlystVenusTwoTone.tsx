import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVenusTwoTone = ({
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
      strokeWidth={1.5}
      d="M21.114 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.263 8.336c-5.551.815-9.524-4.634-14.617-2.546M20.485 14.84c-2.206.918-7.46 1.799-9.946-.888-2.067-2.234-4.09 0-2.515 1.141 3.905 2.18 2.799 4.789 5.673 5.625M3.854 8.544c5.13-1.18 6.07 4.16 10.912 2.484"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.89 11.494v.012M5.419 11.5v.011"
    />
  </Svg>
);
export default IconlystVenusTwoTone;
