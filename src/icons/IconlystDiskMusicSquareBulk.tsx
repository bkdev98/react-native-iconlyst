import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiskMusicSquareBulk = ({
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
      d="M16.787 2.25H8.352c-3.309 0-5.532 2.321-5.532 5.776v7.948c0 3.455 2.223 5.776 5.532 5.776h8.434c3.31 0 5.534-2.321 5.534-5.776V8.026c0-3.455-2.224-5.776-5.533-5.776"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.571 17.791a5.8 5.8 0 0 1-5.792-5.792 5.8 5.8 0 0 1 5.792-5.792 5.8 5.8 0 0 1 5.792 5.792 5.8 5.8 0 0 1-5.792 5.792M8.28 11.999a4.296 4.296 0 0 1 4.292-4.292A4.296 4.296 0 0 1 16.863 12a4.296 4.296 0 0 1-4.292 4.292A4.296 4.296 0 0 1 8.279 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.57 14.08A2.08 2.08 0 0 1 10.49 12c0-1.147.933-2.08 2.08-2.08 1.146 0 2.08.933 2.08 2.08s-.934 2.08-2.08 2.08M11.99 12a.58.58 0 1 1 1.16 0 .58.58 0 0 1-1.16 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiskMusicSquareBulk;
