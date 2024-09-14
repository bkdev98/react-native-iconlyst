import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveSquareOutline = ({
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
      d="M4.148 3.737c1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487C21.41 4.721 22 6.124 22 7.783v8.435c0 1.66-.59 3.062-1.648 4.045-1.05.979-2.501 1.487-4.128 1.487H8.276c-1.628 0-3.078-.512-4.129-1.49-1.056-.985-1.647-2.387-1.647-4.042V7.783c0-1.66.59-3.062 1.648-4.046M5.17 4.835C4.45 5.505 4 6.495 4 7.783v8.435c0 1.283.45 2.272 1.17 2.944.727.678 1.79 1.088 3.106 1.088h7.948c1.317 0 2.38-.409 3.106-1.084.72-.67 1.17-1.66 1.17-2.948V7.783c0-1.289-.45-2.278-1.17-2.948-.726-.676-1.789-1.085-3.106-1.085H8.276c-1.317 0-2.38.409-3.106 1.085"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.479 9.707a.75.75 0 0 1 .75.75v3.086a.75.75 0 0 1-1.5 0v-3.086a.75.75 0 0 1 .75-.75M12.25 6.848a.75.75 0 0 1 .75.75v8.804a.75.75 0 0 1-1.5 0V7.598a.75.75 0 0 1 .75-.75M16.022 9.707a.75.75 0 0 1 .75.75v3.086a.75.75 0 0 1-1.5 0v-3.086a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsWaveSquareOutline;
