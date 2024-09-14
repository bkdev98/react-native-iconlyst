import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadlightsRightShortTwoTone = ({
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
      d="m21.25 8.5-4.206-2M21.25 12.5l-4.206-2M21.25 16.5l-4.206-2M21.25 20.5l-4.206-2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.306 12.417c-.05-1.535-.194-3.088-.735-4.566-.202-.552-.463-1.067-.843-1.502-.441-.508-.981-.735-1.621-.71-1.108.043-2.153.348-3.157.855-1.212.612-2.167 1.539-2.842 2.79-1.172 2.178-1.13 4.367.043 6.527.747 1.378 1.864 2.295 3.198 2.907.862.394 1.77.568 2.699.638.889.069 1.541-.362 2.015-1.14.46-.755.725-1.603.908-2.48.227-1.08.304-2.179.334-3.32z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeadlightsRightShortTwoTone;
