import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerCopyBold = ({
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
      d="M20.25 17.15c0 1.91-1.12 3.1-2.92 3.1h-6.46c-1.8 0-2.91-1.19-2.91-3.1v-3.86h1.95a3.24 3.24 0 0 0 3.22-3.23v-2.1h4.2c1.78 0 2.92 1.21 2.92 3.1zm-16.5-4.21V9.08h1.96c1.78 0 3.22-1.45 3.22-3.22V3.75h4.2c1.65 0 2.75 1.05 2.9 2.71h-3.54c-.71 0-1.39.29-1.88.8l-3.43 3.57c-.47.49-.72 1.13-.72 1.8v3.41c-1.68-.09-2.71-1.26-2.71-3.1m13.78-6.47c-.16-2.5-1.92-4.22-4.4-4.22H8.28c-.69 0-1.37.29-1.88.81L2.97 6.63c-.46.49-.72 1.15-.72 1.8v4.51c0 2.69 1.69 4.52 4.23 4.6.16 2.5 1.92 4.21 4.39 4.21h6.46c2.6 0 4.42-1.89 4.42-4.6v-6.09c0-2.64-1.73-4.5-4.22-4.59"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerCopyBold;
