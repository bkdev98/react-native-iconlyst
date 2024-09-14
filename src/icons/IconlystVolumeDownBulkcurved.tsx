import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeDownBulkcurved = ({
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
      d="M14.177 5.261c-1.674-.995-3.212.184-4.334 1.044-.46.352-.893.683-1.222.791-.446.147-.833.194-1.206.238-.654.078-1.33.16-2.07.787-1.187 1.01-1.184 2.602-1.181 3.883-.003 1.28-.006 2.873 1.183 3.884.74.63 1.417.71 2.07.787.374.045.76.091 1.205.236.327.11.76.441 1.218.791.815.625 1.847 1.416 3.005 1.416.439 0 .896-.113 1.366-.392 1.34-.95 1.814-2.709 1.814-6.722 0-4.062-.457-5.759-1.848-6.743"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.31 7.99a.75.75 0 1 0-1.313.725 6.86 6.86 0 0 1 0 6.58.75.75 0 1 0 1.313.726c1.368-2.472 1.368-5.551 0-8.031"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeDownBulkcurved;
