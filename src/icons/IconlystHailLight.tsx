import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHailLight = ({
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
      d="m8.285 20.13 1.791-1.034v-2.07l-1.791-1.034-1.792 1.035v2.069zM4.906 12.894l1.792-1.035V9.79L4.906 8.756 3.114 9.79v2.07zM16.595 17.632l1.792-1.035v-2.069l-1.792-1.034-1.791 1.034v2.07zM7.587 6.992 8.982 3.87M10.077 13.946l1.396-3.122M15.465 11.118l1.395-3.122M20.14 9.845l.974-2.179"
    />
  </Svg>
);
export default IconlystHailLight;
