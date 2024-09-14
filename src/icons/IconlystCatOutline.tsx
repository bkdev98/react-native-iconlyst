import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatOutline = ({
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
      d="M6.591 22.3h-1.96c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.21l-.04-8.81c-.03-.88-.66-1.36-1.27-1.36-.75 0-1.43-.34-1.92-.97-.54-.69-.8-1.69-.62-2.41a.75.75 0 0 1 .73-.57c.42 0 .94-.22 1.12-.65.79-1.93 2.62-2.18 3.47-2.04.41.07.69.45.62.86s-.45.68-.86.62c-.01 0-1.29-.2-1.83 1.13-.33.8-1.03 1.28-1.75 1.47.05.21.15.46.31.66.21.26.45.39.74.39 1.52 0 2.71 1.22 2.77 2.83l.05 9.59a.75.75 0 0 1-.75.75zM9.681 22.3c-.41 0-.75-.33-.75-.74s.33-.75.74-.76l8.87-.08c.63 0 1.22-.47 1.61-1.3.65-1.37.65-3.54-.8-5.29a.76.76 0 0 1 .1-1.06c.32-.26.79-.22 1.06.1 1.87 2.25 1.85 5.08 1 6.89-.64 1.36-1.74 2.17-2.96 2.17l-8.86.08z"
    />
    <Path
      fill={props.color}
      d="M16.712 22.17c-.09 0-.19-.02-.28-.05a.75.75 0 0 1-.41-.98c1.15-2.84 1.1-5.31-.14-7.15-1.19-1.77-3.23-2.58-4.61-2.58-.41 0-.75-.34-.75-.75 0-.33.22-.62.52-.71v-.91c0-2.08-1-3.69-2.96-4.8v.99c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.04c0-.25.12-.48.33-.62a.73.73 0 0 1 .7-.07c3.18 1.31 4.93 3.69 4.93 6.69v1.02c1.6.35 3.4 1.34 4.58 3.09 1.07 1.58 1.99 4.35.29 8.55-.12.29-.4.47-.7.47"
    />
    <Path
      fill={props.color}
      d="M12.881 22.27c-.05 0-.1 0-.15-.02-1.19-.24-2.31-1.4-2.67-2.75-.24-.9-.35-2.67 1.63-4.42.31-.27.79-.24 1.06.07s.25.78-.07 1.06c-1.03.91-1.44 1.92-1.18 2.91.24.89.98 1.56 1.53 1.67.41.08.67.48.58.88-.07.36-.39.6-.73.6M7.181 8.38c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.33.75.75-.34.76-.75.76z"
    />
  </Svg>
);
export default IconlystCatOutline;