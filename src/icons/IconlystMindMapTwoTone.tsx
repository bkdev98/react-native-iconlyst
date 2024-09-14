import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMindMapTwoTone = ({
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
      strokeWidth={1.5}
      d="M8.794 12.648a4.235 4.235 0 1 1 8.47 0 4.235 4.235 0 0 1-8.47 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8.328 17.35 1.677-1.677"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.265 6.825a1.588 1.588 0 1 1 3.176 0 1.588 1.588 0 0 1-3.176 0ZM5.088 18.736a1.853 1.853 0 1 1 3.706 0 1.853 1.853 0 0 1-3.706 0ZM3.5 5.766a2.647 2.647 0 1 1 5.294 0 2.647 2.647 0 0 1-5.294 0ZM17.265 19.001a2.118 2.118 0 1 1 4.235 0 2.118 2.118 0 0 1-4.235 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.972 9.59 8.058 7.678M16.087 9.59l1.602-1.601M17.794 17.413l-1.676-1.676"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMindMapTwoTone;
