import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerDocumentCloseBroken = ({
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
      d="M10.29 3.582h6.146C19.25 3.582 21 5.568 21 8.379v5.623c0 .596-.23 1.169-.643 1.6l-4.27 4.447a2.3 2.3 0 0 1-1.665.71h-3.017M3.824 10.281v5.682c0 2.811 1.76 4.797 4.563 4.797"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.965 20.688v-3.257c-.001-1.59 1.286-2.881 2.876-2.884M14.66 9.477H8.52m3.813 4.554H8.52M3 3.242l3.224 3.224m0-3.224L3 6.466"
    />
  </Svg>
);
export default IconlystStickerDocumentCloseBroken;
