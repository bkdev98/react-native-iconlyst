import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongLibraryOutline = ({
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
      d="M5.085 4.92C4.409 5.646 4 6.709 4 8.026v7.948c0 1.317.41 2.38 1.087 3.106.672.72 1.661 1.17 2.945 1.17h8.435c1.289 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.95-1.17H8.033c-1.289 0-2.277.45-2.947 1.17M3.987 3.898C4.97 2.84 6.373 2.25 8.032 2.25h8.434c1.66 0 3.063.59 4.047 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.046 1.648H8.032c-1.655 0-3.057-.591-4.042-1.647-.979-1.05-1.49-2.501-1.49-4.13V8.027c0-1.627.508-3.077 1.487-4.128"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.841 12.752a1.282 1.282 0 1 0 0 2.564 1.282 1.282 0 0 0 0-2.564m-2.782 1.282a2.782 2.782 0 1 1 5.564 0 2.782 2.782 0 0 1-5.564 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.573 7.664v-.001l-.001-.002v-.002a.75.75 0 0 0-1.449.275v6.101a.75.75 0 0 0 1.5 0V9.917c.296.182.644.332 1.05.415a.75.75 0 1 0 .298-1.47c-.489-.1-.836-.386-1.075-.679a2.5 2.5 0 0 1-.324-.522m.001.003ZM8.35 2.25A.75.75 0 0 1 9.1 3v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongLibraryOutline;
