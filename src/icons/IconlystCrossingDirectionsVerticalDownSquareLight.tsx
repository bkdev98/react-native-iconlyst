import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsVerticalDownSquareLight = ({
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
      d="M3 16.218V7.783C3 4.835 5.081 3 8.026 3h7.948C18.919 3 21 4.835 21 7.784v8.434C21 19.166 18.919 21 15.974 21H8.026C5.081 21 3 19.157 3 16.218M8.102 13.516v2.165m0 0h2.165m-2.165 0 7.362-7.362M13.731 15.68h2.166m0 0v-2.164m0 2.165L8.535 8.319"
    />
  </Svg>
);
export default IconlystCrossingDirectionsVerticalDownSquareLight;
