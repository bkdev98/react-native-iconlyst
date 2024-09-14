import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerCopyBulk = ({
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
      d="M17.33 20.25c1.8 0 2.92-1.19 2.92-3.1v-6.09c0-1.89-1.14-3.1-2.92-3.1h-4.2v2.1a3.24 3.24 0 0 1-3.22 3.23H7.96v3.86c0 1.91 1.11 3.1 2.91 3.1zM6.46 16.04l.02 1.5c.16 2.5 1.92 4.21 4.39 4.21h6.46c2.6 0 4.42-1.89 4.42-4.6v-6.09c0-2.64-1.73-4.5-4.22-4.59l-1.5-.01h-3.54c-.71 0-1.39.29-1.88.8l-3.43 3.57c-.47.49-.72 1.13-.72 1.8z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M3.75 9.08v3.86c0 1.84 1.03 3.01 2.71 3.1l.02 1.5c-2.54-.08-4.23-1.91-4.23-4.6V8.43c0-.65.26-1.31.72-1.8L6.4 3.06c.51-.52 1.19-.81 1.88-.81h4.85c2.48 0 4.24 1.72 4.4 4.22l-1.5-.01c-.15-1.66-1.25-2.71-2.9-2.71h-4.2v2.11c0 1.77-1.44 3.22-3.22 3.22z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStickerCopyBulk;
