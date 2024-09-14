import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoldExpandVerticalLight = ({
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
      d="M15.191 6.204 12.001 3l-3.19 3.204M12.001 3v5.252M15.191 17.796 12.001 21l-3.19-3.204M12.001 21v-5.252M18.563 12h.937m-3.75 0h-2.344m-2.812 0H8.25m-2.812 0H4.5"
    />
  </Svg>
);
export default IconlystFoldExpandVerticalLight;
