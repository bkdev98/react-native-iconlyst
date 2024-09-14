import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteLightcurved = ({
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
      d="M18.89 9.554c0 8.02 1.154 11.644-6.61 11.644S5.693 17.573 5.693 9.554M20.365 6.48H4.215M15.715 6.48s.529-3.766-3.426-3.766c-3.953 0-3.425 3.766-3.425 3.766"
    />
  </Svg>
);
export default IconlystDeleteLightcurved;
