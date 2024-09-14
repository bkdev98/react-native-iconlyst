import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHangoutOutline = ({
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
      d="M12 21.75c-.41 0-.75-.34-.75-.75v-1.08c-4.53-.38-8.1-4.19-8.1-8.82 0-4.88 3.97-8.85 8.85-8.85s8.85 3.97 8.85 8.85-4.8 10.65-8.85 10.65m0-18c-4.05 0-7.35 3.3-7.35 7.35s3.3 7.35 7.35 7.35c.41 0 .75.34.75.75v.96c3.08-.69 6.6-5.35 6.6-9.06 0-4.05-3.3-7.35-7.35-7.35"
    />
    <Path
      fill={props.color}
      d="M14.7 14.548c-.26 0-.5-.13-.63-.35a.77.77 0 0 1-.05-.72c.06-.12.16-.42.22-.73-.9 0-1.64-.74-1.64-1.65v-1.8c0-.91.74-1.65 1.65-1.65h1.8c.91 0 1.65.74 1.65 1.65v2.25c0 1.65-1.35 3-3 3m-.45-5.4c-.08 0-.15.07-.15.15v1.8c0 .08.07.15.15.15h.72c.35 0 .65.24.73.58.06.26.08.53.06.78.27-.27.44-.65.44-1.06v-2.25c0-.08-.07-.15-.15-.15zM8.4 14.548c-.26 0-.49-.13-.63-.35a.74.74 0 0 1-.05-.72c.05-.12.16-.42.22-.73-.9 0-1.64-.74-1.64-1.65v-1.8c0-.91.74-1.65 1.65-1.65h1.8c.91 0 1.65.74 1.65 1.65v2.25c0 1.65-1.35 3-3 3m-.45-5.4c-.08 0-.15.07-.15.15v1.8c0 .08.07.15.15.15h.72c.35 0 .65.24.73.58.06.26.08.53.06.78.27-.27.44-.65.44-1.06v-2.25c0-.08-.07-.15-.15-.15z"
    />
  </Svg>
);
export default IconlystHangoutOutline;
