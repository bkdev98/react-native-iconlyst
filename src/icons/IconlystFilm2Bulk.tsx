import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm2Bulk = ({
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
      d="M21.38 7.48v9.04c0 .32-.02.62-.08.91-.27 1.8-1.39 3.13-3.05 3.73-.46.16-.96.27-1.5.32-.19.01-.38.02-.58.02H7.83c-.2 0-.39-.01-.58-.02-.54-.05-1.04-.16-1.5-.32-1.66-.6-2.78-1.93-3.05-3.73-.06-.29-.08-.59-.08-.91V7.48c0-.41.04-.79.12-1.16.33-1.67 1.42-2.91 3.01-3.48.46-.16.96-.27 1.5-.32.19-.01.38-.02.58-.02h8.34c.2 0 .39.01.58.02.54.05 1.04.16 1.5.32 1.59.57 2.68 1.81 3.01 3.48.08.37.12.75.12 1.16"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.25 7.823v3.3h3.13v1.5h-3.13v3.31h3.13v.59c0 .32-.02.62-.08.91h-3.05v3.73c-.46.16-.96.27-1.5.32v-8.86h-9.5v8.86c-.54-.05-1.04-.16-1.5-.32v-3.73H2.7c-.06-.29-.08-.59-.08-.91v-.59h3.13v-3.31H2.62v-1.5h3.13v-3.3H2.62v-.34c0-.41.04-.79.12-1.16h3.01v-3.48c.46-.16.96-.27 1.5-.32v8.6h9.5v-8.6c.54.05 1.04.16 1.5.32v3.48h3.01c.08.37.12.75.12 1.16v.34z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilm2Bulk;
