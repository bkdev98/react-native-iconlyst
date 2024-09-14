import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeSliceAltOutline = ({
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
      d="M14.027 21.756c-3.03 0-6.05-1.17-8.33-3.45-4.01-4.02-4.59-10.32-1.37-14.99.42-.6 1.07-.99 1.8-1.06.71-.07 1.41.19 1.92.69l13 13.01c.51.51.76 1.21.69 1.92-.07.73-.45 1.38-1.06 1.8a11.73 11.73 0 0 1-6.66 2.07zm-8.46-17.59c-2.81 4.07-2.3 9.57 1.2 13.08 3.5 3.5 9 4 13.08 1.2.24-.16.39-.42.41-.7a.91.91 0 0 0-.26-.72l-13-13.01a.91.91 0 0 0-.72-.26c-.28.03-.54.18-.7.41z"
    />
    <Path
      fill={props.color}
      d="M14.437 21.736a.75.75 0 0 1-.75-.72l-.45-10.35H3.007c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.94c.4 0 .73.32.75.72l.48 11.06c.02.41-.3.76-.72.78h-.03z"
    />
    <Path
      fill={props.color}
      d="M6.167 18.446c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.79-7.78c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-7.79 7.78c-.15.15-.34.22-.53.22"
    />
  </Svg>
);
export default IconlystOrangeSliceAltOutline;
