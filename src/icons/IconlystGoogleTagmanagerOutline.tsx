import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleTagmanagerOutline = ({
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
      d="M13.451 21.139c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.95-6.94c.51-.51.51-1.34 0-1.85l-6.94-6.94c-.49-.49-1.36-.49-1.85 0a1.3 1.3 0 0 0-.38.93c0 .35.14.68.38.92l5.48 5.48c.29.29.29.77 0 1.06l-4.03 4.03c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l3.5-3.5-4.95-4.95c-.53-.53-.82-1.24-.82-1.99s.29-1.46.82-1.99c1.06-1.06 2.91-1.06 3.97 0l6.94 6.94a2.82 2.82 0 0 1 0 3.97l-6.95 6.94c-.15.15-.34.22-.53.22z"
    />
    <Path
      fill={props.color}
      d="M11.991 21.737c-.72 0-1.44-.27-1.98-.82l-6.94-6.94c-.53-.53-.82-1.23-.82-1.98s.29-1.46.82-1.99l6.94-6.94c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.95 6.94c-.25.25-.38.58-.38.92s.14.68.38.92l6.94 6.94c.51.51 1.34.51 1.85 0s.51-1.34 0-1.85l-5.48-5.48a.75.75 0 0 1 0-1.06l4.03-4.03c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.5 3.5 4.95 4.95a2.82 2.82 0 0 1 0 3.97 2.8 2.8 0 0 1-1.99.82z"
    />
  </Svg>
);
export default IconlystGoogleTagmanagerOutline;
