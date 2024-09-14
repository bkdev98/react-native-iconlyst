import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartFunBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M20.074 14.337c.887-1.373 1.434-2.904 1.426-4.563-.01-2.536-1.34-4.92-3.963-5.766-1.8-.58-3.763-.258-5.287 1.93-1.524-2.188-3.486-2.51-5.287-1.93C4.34 4.854 3.01 7.24 3 9.775c-.024 5.044 5.088 8.903 9.25 10.748 1.732-.768 3.63-1.885 5.252-3.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M15.992 11.43c-.77 1.322-2.14 2.392-3.723 2.364-1.584.028-2.954-1.042-3.724-2.365"
    />
  </Svg>
);
export default IconlystHeartFunBrokensharp;
