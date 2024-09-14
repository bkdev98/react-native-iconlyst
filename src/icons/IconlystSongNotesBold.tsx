import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongNotesBold = ({
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
      d="M8.079 10.367c0-.01.006-.019.006-.029V5.636a3.5 3.5 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.59-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.9 2.9 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054M21.75 6.503a.75.75 0 0 0-1.067-.68c-2.556 1.189-5.244 1.683-7.982 1.469a.75.75 0 0 0-.568.196.75.75 0 0 0-.24.55v7.697a2.87 2.87 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.902 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903l-.002-.015v-6.91c.184.007.37.023.553.023 2.152 0 4.26-.427 6.304-1.228V14.2a2.87 2.87 0 0 0-1.404-.377 2.906 2.906 0 0 0-2.902 2.903 2.906 2.906 0 0 0 2.902 2.903 2.906 2.906 0 0 0 2.904-2.903V6.502"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongNotesBold;
