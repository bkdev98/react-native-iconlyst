import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftWindowsOutline = ({
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
      fill={props.color}
      d="M19.285 21.949c-.15 0-.3-.02-.44-.05l-14.54-3.14a2.115 2.115 0 0 1-1.67-2.06v-9c0-1 .68-1.84 1.66-2.06l14.54-3.14c.63-.13 1.28.02 1.77.42.5.4.78 1 .78 1.64v15.28c0 .64-.28 1.24-.78 1.64-.38.31-.85.47-1.33.47zm-.13-17.99-14.54 3.14a.61.61 0 0 0-.48.6v9c0 .29.2.53.49.6l14.53 3.14c.18.04.37 0 .52-.12.08-.07.22-.22.22-.47V4.569a.6.6 0 0 0-.74-.59z"
    />
    <Path
      fill={props.color}
      d="M11.115 20.21c-.41 0-.75-.34-.75-.75V4.93c0-.41.34-.75.75-.75s.75.34.75.75v14.53c0 .41-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M20.645 12.945H3.385c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17.26c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystMicrosoftWindowsOutline;
