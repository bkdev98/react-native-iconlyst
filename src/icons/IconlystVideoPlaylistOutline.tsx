import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoPlaylistOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.013 9.965a2.564 2.564 0 0 0-2.564 2.563v5.156a2.564 2.564 0 0 0 2.564 2.564h10.474a2.564 2.564 0 0 0 2.563-2.564v-5.156a2.564 2.564 0 0 0-2.563-2.563zM2.95 12.528a4.064 4.064 0 0 1 4.064-4.063h10.474a4.064 4.064 0 0 1 4.063 4.063v5.156a4.064 4.064 0 0 1-4.063 4.064H7.013a4.064 4.064 0 0 1-4.064-4.064z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.41 13.724a13 13 0 0 0 0 2.75c.02.144.074.176.083.18.012.007.094.047.28-.026a6.7 6.7 0 0 0 1.96-1.23c.147-.136.17-.246.17-.304 0-.06-.026-.166-.167-.294l-.003-.003a6.6 6.6 0 0 0-1.967-1.233l-.008-.003c-.14-.06-.226-.034-.256-.018a.13.13 0 0 0-.047.043.3.3 0 0 0-.046.138m.928-1.547c-.496-.208-1.055-.213-1.533.037-.49.257-.808.74-.884 1.32l-.001.013c-.111.976-.112 2.013-.001 3.09l.001.015c.068.546.35 1.036.837 1.31.482.27 1.049.265 1.568.061l.006-.002a8.2 8.2 0 0 0 2.412-1.514l.004-.004c.41-.376.659-.873.656-1.417-.003-.542-.256-1.031-.659-1.397a8 8 0 0 0-2.406-1.512M5.682 6.113a.75.75 0 0 1 .75-.75h11.636a.75.75 0 0 1 0 1.5H6.432a.75.75 0 0 1-.75-.75M8.219 3a.75.75 0 0 1 .75-.75h6.561a.75.75 0 0 1 0 1.5H8.97a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoPlaylistOutline;
