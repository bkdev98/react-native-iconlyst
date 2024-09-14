import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxUpLight = ({
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
      d="M17.291 3.814c2.371.373 3.819 2.284 3.819 4.864v7.807c0 2.895-1.8 4.94-4.686 4.94H8.168c-2.885 0-4.676-2.045-4.676-4.94V8.678c0-2.59 1.448-4.5 3.819-4.864"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.557 6.022 2.746-2.659 2.746 2.659M12.3 3.367v7.236M21.103 13.707H16.91c-.869 0-1.661.493-2.047 1.274a2.86 2.86 0 0 1-2.564 1.595 2.86 2.86 0 0 1-2.563-1.595 2.28 2.28 0 0 0-2.047-1.274H3.5"
    />
  </Svg>
);
export default IconlystInboxUpLight;
