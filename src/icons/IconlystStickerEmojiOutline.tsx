import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerEmojiOutline = ({
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
      d="M3.987 3.898C4.971 2.84 6.373 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648.979 1.05 1.487 2.5 1.487 4.128v5.893c0 .818-.316 1.605-.884 2.196l-4.474 4.66a3.17 3.17 0 0 1-2.286.975H8.032c-1.655 0-3.057-.591-4.041-1.647-.98-1.05-1.491-2.5-1.491-4.13V8.026c0-1.627.509-3.078 1.487-4.128M5.085 4.92C4.409 5.646 4 6.709 4 8.026v7.948c0 1.317.41 2.38 1.088 3.106.672.72 1.66 1.17 2.944 1.17h6.324c.454 0 .889-.186 1.204-.514l4.475-4.66c.298-.31.465-.725.465-1.157V8.026c0-1.318-.409-2.38-1.084-3.106-.67-.72-1.66-1.17-2.95-1.17H8.033c-1.288 0-2.277.45-2.947 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.939 13.742h3.234a.75.75 0 0 1 0 1.5h-3.232a2.27 2.27 0 0 0-2.265 2.272v3.414a.75.75 0 0 1-1.5 0v-3.413a3.77 3.77 0 0 1 3.763-3.773M8.461 13.507a.75.75 0 0 1 1.052.138c.597.779 1.452 1.234 2.374 1.234.329 0 .646-.058.944-.165a.75.75 0 1 1 .51 1.411c-.46.166-.95.254-1.454.254-1.442 0-2.717-.717-3.564-1.82a.75.75 0 0 1 .138-1.052M7.934 8.605a1.01 1.01 0 1 1 2.021 0 1.01 1.01 0 0 1-2.021 0M14.58 8.605a1.01 1.01 0 1 1 2.021 0 1.01 1.01 0 0 1-2.02 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerEmojiOutline;
