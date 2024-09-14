import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasFireworksBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="m18.381 9.623-7.25 7.25-1.34-1.34-1.22-1.22-.01-.01-.52-.53c-.29-.28-.45-.66-.45-1.07 0-.22.05-.44.14-.63.07-.17.18-.32.31-.45l.85-.85 1.66-1.66 1.33-1.33 2.45-2.45c1.31 1.73 2.64 3.14 4.05 4.29"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.962 9.133c-.05.38-.37.65-.74.65-.03 0-.07-.01-.11-.01l-4.56-.66 1.33-1.33 3.45.5c.41.06.69.44.63.85M14.442 12.633c-.07.36-.38.61-.73.61-.05 0-.1-.01-.15-.02l-5.83-1.15c.07-.17.18-.32.31-.45l.85-.85 4.96.98c.41.08.67.47.59.88M9.792 15.533c-.03.07-.07.14-.12.2-.38.53-1.2 1.14-2.94.99-2.32-.18-2.86.64-3.18 1.13-.14.23-.38.35-.63.35a.758.758 0 0 1-.63-1.16c.62-.96 1.7-2.04 4.57-1.82.79.08 1.37-.06 1.6-.36.14-.19.13-.44.11-.55zM4.785 13.17a.75.75 0 0 1-.75-.75c0-.414.336-.755.75-.755s.75.33.75.745v.01a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.822 3.923-.45 6.03c-.02.36-.22.66-.53.8a.9.9 0 0 1-.44.1c-.22 0-.45-.07-.65-.2-.05-.04-.11-.07-.16-.12l-10.98 10.98c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l10.83-10.83c-1.41-1.15-2.74-2.56-4.05-4.29-.1-.13-.19-.26-.29-.39-.25-.37-.3-.78-.13-1.11.14-.31.45-.5.81-.53l6.03-.45h.08c.26 0 .52.1.7.29.21.21.31.49.29.78"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasFireworksBulk;
