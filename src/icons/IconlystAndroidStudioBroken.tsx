import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidStudioBroken = ({
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
      d="M8.788 8.157A3.493 3.493 0 1 0 9.96 5.546M12.28 4.665V3M5.059 21l3.982-7.247M19.497 21l-5.413-9.852M20.444 8.354A8.715 8.715 0 0 1 7.78 16.125"
    />
  </Svg>
);
export default IconlystAndroidStudioBroken;
