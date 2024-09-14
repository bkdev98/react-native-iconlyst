import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoDashBroken = ({
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
      d="M14.483 21H10.52m3.963-18H10.52M3.5 13.98v-3.962M3.527 7.095C3.84 4.862 5.322 3.283 7.574 3.02M3.527 16.914c.313 2.233 1.795 3.802 4.047 4.066M21.499 13.98v-3.962M17.393 20.981c2.252-.264 3.724-1.833 4.036-4.066M17.393 3.02c2.252.263 3.724 1.842 4.036 4.075M12.5 15.701v-4.31m0-3.044v-.048"
    />
  </Svg>
);
export default IconlystInfoDashBroken;
