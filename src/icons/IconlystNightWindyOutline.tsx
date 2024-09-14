import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNightWindyOutline = ({
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
      d="M7.842 20.154a3.852 3.852 0 1 0 5.45-5.448 3.84 3.84 0 0 0-2.725-1.13H5.333a.75.75 0 0 0 0 1.5h5.234a2.352 2.352 0 1 1-1.664 4.017.75.75 0 0 0-1.061 1.061M2.864 9.187c0 .414.336.75.75.75h7.597a3.506 3.506 0 1 0-2.478-5.984.75.75 0 0 0 1.06 1.061 2.005 2.005 0 1 1 1.418 3.423H3.614a.75.75 0 0 0-.75.75M16.75 16.475a3.038 3.038 0 0 0 4.296-4.296 3.03 3.03 0 0 0-2.148-.89h-3.57a.75.75 0 1 0 0 1.5h3.57a1.538 1.538 0 1 1-1.087 2.624.75.75 0 1 0-1.06 1.062M19.182 2.55a.75.75 0 0 1 .714.519c.3.925 1.024 1.65 1.95 1.95a.75.75 0 0 1 0 1.426 3.03 3.03 0 0 0-1.95 1.95.75.75 0 0 1-1.427 0 3.03 3.03 0 0 0-1.95-1.95.75.75 0 0 1 0-1.427 3.03 3.03 0 0 0 1.95-1.949.75.75 0 0 1 .713-.519m0 2.34c-.242.316-.525.6-.841.842.316.242.6.525.841.841q.366-.476.842-.841a4.5 4.5 0 0 1-.842-.842M17.264 20.923a.75.75 0 0 0 .798-.208.755.755 0 1 0-.798.208M4.839 5.954a.75.75 0 0 0 .798-.207.755.755 0 1 0-.798.207"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNightWindyOutline;
