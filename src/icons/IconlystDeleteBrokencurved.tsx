import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteBrokencurved = ({
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
      d="M12.24 21.242c-7.765 0-6.587-3.625-6.587-11.644M18.849 9.598c0 6.229.696 9.807-2.632 11.094M20.325 6.524H4.175M15.675 6.524s.529-3.766-3.426-3.766c-1.73 0-2.601.72-3.035 1.532"
    />
  </Svg>
);
export default IconlystDeleteBrokencurved;
