import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerCopyOutline = ({
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
      d="M17.585 21.751H11.12a4.317 4.317 0 0 1-4.416-4.6v-4.516c0-.671.26-1.317.726-1.8l3.429-3.573a2.62 2.62 0 0 1 1.879-.8h4.846a4.316 4.316 0 0 1 4.415 4.6v6.09a4.316 4.316 0 0 1-4.415 4.6M11.942 8.3l-3.43 3.573a1.1 1.1 0 0 0-.307.764v4.516a2.8 2.8 0 0 0 2.916 3.1h6.464a2.8 2.8 0 0 0 2.915-3.1v-6.09a2.824 2.824 0 0 0-2.915-3.1h-4.846a1.11 1.11 0 0 0-.797.337"
    />
    <Path
      fill={props.color}
      d="M10.167 13.283H7.516a.75.75 0 1 1 0-1.5h2.649a1.727 1.727 0 0 0 1.719-1.725v-2.8a.75.75 0 1 1 1.5 0v2.8a3.23 3.23 0 0 1-3.217 3.225"
    />
    <Path
      fill={props.color}
      d="M7.458 17.554h-.54a4.277 4.277 0 0 1-4.416-4.61V8.43c.006-.668.264-1.31.724-1.795l3.43-3.575a2.64 2.64 0 0 1 1.88-.809h4.85a4.32 4.32 0 0 1 4.418 4.61v.347a.75.75 0 1 1-1.5 0v-.347a2.828 2.828 0 0 0-2.917-3.11H8.536a1.13 1.13 0 0 0-.8.351L4.314 7.668a1.13 1.13 0 0 0-.311.762v4.514a2.8 2.8 0 0 0 2.917 3.11h.539a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M5.964 9.08H3.311a.75.75 0 1 1 0-1.5h2.65a1.726 1.726 0 0 0 1.72-1.725v-2.8a.75.75 0 0 1 1.5 0v2.8A3.23 3.23 0 0 1 5.963 9.08"
    />
  </Svg>
);
export default IconlystStickerCopyOutline;
