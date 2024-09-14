import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarBoldsharp = ({
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
      d="M21.625 11.516a12.37 12.37 0 0 1-8.891-8.891L12.25.746l-.484 1.878a12.37 12.37 0 0 1-8.89 8.89L.997 12l1.877.486a12.37 12.37 0 0 1 8.891 8.89l.484 1.878.484-1.878a12.37 12.37 0 0 1 8.891-8.89l1.877-.486z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.001 7.747c0-1.162 1.274-2.5 2.5-2.5-1.18 0-2.5-1.35-2.5-2.497 0 1.147-1.308 2.498-2.498 2.498 1.145 0 2.498 1.33 2.498 2.499"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarBoldsharp;
