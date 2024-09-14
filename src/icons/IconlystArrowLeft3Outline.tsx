import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeft3Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.9 7.115-7.937 5a.75.75 0 0 0 0 1.27l7.938 5a.74.74 0 0 0 .76.023.75.75 0 0 0 .389-.656V13.5h8.2a.75.75 0 0 0 0-1.5h-8.2V7.75a.748.748 0 0 0-1.15-.635m-.35 1.994v7.283L5.77 12.75z"
    />
  </Svg>
);
export default IconlystArrowLeft3Outline;
