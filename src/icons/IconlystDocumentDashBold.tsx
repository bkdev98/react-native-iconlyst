import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDashBold = ({
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
      fillRule="evenodd"
      d="M19.62 16.414a.75.75 0 0 0-.746.755 3.05 3.05 0 0 1-.898 2.19.749.749 0 1 0 1.06 1.06 4.52 4.52 0 0 0 1.338-3.26c-.003-.415-.372-.723-.755-.745M15.967 20.25h-3.16a.75.75 0 0 0 0 1.5h3.16a.75.75 0 0 0 0-1.5M8.06 20.249a3 3 0 0 1-.923-.165.75.75 0 1 0-.49 1.417c.444.155.91.238 1.372.248l2.307.001v-1.5c-.002.002-2.172 0-2.267-.001M5.123 17.166v-1.068a.75.75 0 0 0-1.5 0v1.051c-.02.903.227 1.78.714 2.536a.75.75 0 0 0 1.26-.813 3 3 0 0 1-.474-1.706M4.374 14.226a.75.75 0 0 0 .75-.75v-3.218a.75.75 0 0 0-1.5 0v3.218c0 .414.336.75.75.75M4.463 4.128a4.5 4.5 0 0 0-.841 2.53v.858a.75.75 0 0 0 1.5 0v-.839a2.97 2.97 0 0 1 .559-1.673.751.751 0 0 0-1.218-.876M10.256 2.25h-2.12a4.7 4.7 0 0 0-1.303.187.749.749 0 1 0 .424 1.438q.423-.125.87-.125h2.128a.75.75 0 0 0 0-1.5M19.599 7.06l-3.79-3.95c-.35-.36-.78-.62-1.25-.74a.6.6 0 0 0-.14-.04 2.3 2.3 0 0 0-.63-.08h-.6a.749.749 0 1 0 0 1.5h.33v2.2a3.32 3.32 0 0 0 3.3 3.32h2.06v4.96c0 .42.33.75.75.75.41 0 .75-.33.75-.75V9c0-.73-.28-1.41-.78-1.94"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentDashBold;
