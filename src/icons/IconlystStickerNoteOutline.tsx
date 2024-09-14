import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerNoteOutline = ({
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
      d="M9.178 21.749a4.52 4.52 0 0 1-4.492-4.39V6.834a4.5 4.5 0 0 1 4.4-4.584h7.871a4.55 4.55 0 0 1 4.408 4.59v8.159a2.79 2.79 0 0 1-.78 1.938l-3.792 3.95a2.8 2.8 0 0 1-2.02.861h-5.6zm7.753-18H9.195a3.03 3.03 0 0 0-2.177.927 2.98 2.98 0 0 0-.832 2.141v10.525a3.01 3.01 0 0 0 2.995 2.907h5.6a1.3 1.3 0 0 0 .937-.4l3.793-3.951c.233-.242.363-.564.362-.9V6.832a3.053 3.053 0 0 0-2.942-3.084z"
    />
    <Path
      fill={props.color}
      d="M15.262 21.688a.75.75 0 0 1-.75-.75v-2.893a3.316 3.316 0 0 1 3.3-3.31h2.74a.75.75 0 1 1 0 1.5h-2.74a1.81 1.81 0 0 0-1.8 1.81v2.893a.75.75 0 0 1-.75.75M7.21 17.717H3.885a.75.75 0 1 1 0-1.5H7.21a.75.75 0 1 1 0 1.5m0-4.966H3.885a.75.75 0 0 1 0-1.5H7.21a.75.75 0 1 1 0 1.5m0-4.966H3.885a.75.75 0 1 1 0-1.5H7.21a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystStickerNoteOutline;
