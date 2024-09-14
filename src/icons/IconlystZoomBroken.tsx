import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.272 7.245-.524-.526M14.253 6.719l-2.098 2.106M12.155 8.825V4.25M13.728 17.254l.524.526M9.747 17.782l2.098-2.106M11.845 15.676v4.575M17.005 10.524 17.53 10M17.53 14.504l-2.105-2.098M15.425 12.406H20M6.995 13.977l-.526.524M6.469 9.996l2.106 2.098M8.575 12.094H4"
    />
  </Svg>
);
export default IconlystZoomBroken;
