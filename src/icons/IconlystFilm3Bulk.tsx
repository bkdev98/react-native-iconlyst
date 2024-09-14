import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm3Bulk = ({
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
      d="M16.52 21.377H7.48c-.32 0-.62-.02-.91-.08-1.8-.27-3.13-1.39-3.73-3.05-.16-.46-.27-.96-.32-1.5-.01-.19-.02-.38-.02-.58v-8.34c0-.2.01-.39.02-.58.05-.54.16-1.04.32-1.5.6-1.66 1.93-2.78 3.73-3.05.29-.06.59-.08.91-.08h9.04c.41 0 .79.04 1.16.12 1.67.33 2.91 1.42 3.48 3.01.16.46.27.96.32 1.5.01.19.02.38.02.58v8.34c0 .2-.01.39-.02.58-.05.54-.16 1.04-.32 1.5-.57 1.59-1.81 2.68-3.48 3.01-.37.08-.75.12-1.16.12"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.18 18.247h-3.3v3.13h-1.5v-3.13H8.07v3.13h-.59c-.32 0-.62-.02-.91-.08v-3.05H2.84c-.16-.46-.27-.96-.32-1.5h8.86v-9.5H2.52c.05-.54.16-1.04.32-1.5h3.73v-3.05c.29-.06.59-.08.91-.08h.59v3.13h3.31v-3.13h1.5v3.13h3.3v-3.13h.34c.41 0 .79.04 1.16.12v3.01h3.48c.16.46.27.96.32 1.5h-8.6v9.5h8.6c-.05.54-.16 1.04-.32 1.5h-3.48v3.01c-.37.08-.75.12-1.16.12h-.34z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilm3Bulk;
