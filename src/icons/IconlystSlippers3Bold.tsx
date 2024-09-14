import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers3Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.359 13.126c-.26.33-.73.38-1.05.12l-.79-.63-1.86 1.05c-.12.06-.24.09-.37.09-.26 0-.51-.13-.65-.38a.74.74 0 0 1 .28-1.02l1.88-1.06-.04-.39a.75.75 0 0 1 .67-.82c.41-.03.78.25.83.67l.06.57.93.75c.32.26.37.73.11 1.05m1.81-2.52a4.35 4.35 0 0 0-4.77-3.86c-1.16.12-2.2.68-2.93 1.58s-1.07 2.03-.94 3.23c0 0 .82 4.23 1.28 6.51.36 1.72 1.93 2.96 3.68 2.96.13 0 .27 0 .4-.02 1.94-.21 3.39-1.81 3.38-3.73-.02-2.31-.1-6.62-.1-6.67M19.249 10.726c-.14.23-.38.35-.63.35-.14 0-.28-.03-.4-.11l-1.81-1.14-.81.6c-.34.24-.81.17-1.05-.16a.75.75 0 0 1 .16-1.05l.96-.71.09-.58c.06-.41.44-.69.85-.63.41.07.7.45.63.86l-.06.39 1.84 1.15c.35.22.45.68.23 1.03m-1.45-6.71a4.33 4.33 0 0 0-3.23.79c-.93.69-1.54 1.7-1.72 2.89 0 0-.28 4.31-.4 6.62-.1 1.92 1.28 3.58 3.21 3.88.19.03.39.04.58.04 1.7 0 3.2-1.13 3.62-2.8.57-2.25 1.58-6.43 1.59-6.47a4.355 4.355 0 0 0-3.65-4.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlippers3Bold;
