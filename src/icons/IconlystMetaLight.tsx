import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetaLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.24 8.65c1.486 2.075 2.392 4.513 3.862 6.598.67.95 1.551 1.986 2.7 2.345 1.338.419 2.464-.468 2.885-1.704.527-1.548.312-3.333-.081-4.884-.523-2.057-1.812-4.486-4.144-4.694-1.414-.124-2.568.857-3.376 1.914l-.325.425c-1.486 2.075-2.393 4.513-3.864 6.598-.67.95-1.55 1.986-2.698 2.345-1.339.419-2.466-.468-2.886-1.704-.526-1.548-.312-3.333.082-4.884.522-2.057 1.811-4.486 4.144-4.694 1.412-.124 2.567.857 3.374 1.914z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMetaLight;
