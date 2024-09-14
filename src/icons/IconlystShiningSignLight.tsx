import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShiningSignLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.345 7.948-.963-1.187m4.685-2.232L12.092 3m3.656 4.89 1.09-1.072M8.345 16.052l-.963 1.187m4.685 2.232L12.092 21m3.656-4.89 1.09 1.072M12.11 7.467a6.49 6.49 0 0 0 4.318 4.318 6.49 6.49 0 0 0-4.318 4.318 6.49 6.49 0 0 0-4.318-4.318 6.49 6.49 0 0 0 4.318-4.318M18.766 9.448a3.51 3.51 0 0 0 2.338 2.337 3.51 3.51 0 0 0-2.338 2.338 3.51 3.51 0 0 0-2.337-2.338 3.51 3.51 0 0 0 2.337-2.337"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.464 9.448A3.51 3.51 0 0 0 7.8 11.785a3.51 3.51 0 0 0-2.337 2.338 3.51 3.51 0 0 0-2.338-2.338 3.51 3.51 0 0 0 2.338-2.337"
    />
  </Svg>
);
export default IconlystShiningSignLight;
