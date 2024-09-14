import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentCopyBold = ({
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
      d="M19.18 13.98c.02 1.17-.92 2.16-2.07 2.21h-.48v-4.48c0-.61-.23-1.19-.65-1.62l-2.94-3.06c-.44-.46-1.05-.72-1.68-.72H8.88v-.46c.03-1.18.97-2.1 2.14-2.1h3.44V5.6c0 1.66 1.35 3.01 3.01 3.02h1.71zm-4.05 4.05c.01 1.2-.92 2.17-2.08 2.22H6.93c-.58-.01-1.12-.25-1.51-.67-.4-.41-.62-.96-.6-1.55V9.91c.02-1.16.99-2.1 2.15-2.1h3.43v1.86c0 1.65 1.35 3 3.01 3.01h1.72zm4.91-12L17.1 2.97c-.44-.46-1.06-.72-1.68-.72h-4.4c-1.96 0-3.59 1.59-3.64 3.58v.48h-.41c-1.97 0-3.6 1.6-3.65 3.58v8.12c-.02.98.34 1.91 1.01 2.61.68.71 1.59 1.11 2.55 1.13h6.2c2-.08 3.56-1.72 3.55-3.72v-.34h.5c1.99-.08 3.58-1.75 3.55-3.72V7.65c0-.63-.23-1.21-.64-1.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentCopyBold;
