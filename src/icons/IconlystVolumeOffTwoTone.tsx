import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffTwoTone = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M6.095 16.65a1.8 1.8 0 0 1-.635-.341c-.765-.653-.71-2.397-.71-3.676 0-1.278-.055-3.023.71-3.675.709-.607 1.213-.448 2.51-.551s4.039-4.058 6.156-2.808c.485.394.77.982.938 1.887M15.283 14.668c-.037 2.873-.262 4.272-1.157 5-.98.579-2.09.047-3.135-.71" />
      <Path d="m4.752 20.75 3.713-3.713 6.819-6.82L20.75 4.75" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystVolumeOffTwoTone;
