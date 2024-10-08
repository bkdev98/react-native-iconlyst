import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGingerbreadBulk = ({
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
      d="M19.581 13.391c-.32.25-.69.44-1.11.55l-.42.1-1 .25c-.15.04-.28.16-.34.31-.05.15-.03.32.06.45l2.03 2.91c.07.1.13.2.17.3.33.58.44 1.25.32 1.91a2.97 2.97 0 0 1-1.22 1.91c-.5.35-1.09.53-1.69.53-.17 0-.35-.01-.52-.04-.3-.05-.59-.15-.86-.3-.42-.21-.78-.53-1.05-.92l-1.41-2.03a.49.49 0 0 0-.4-.21c-.17 0-.31.08-.41.21l-1.12 1.6v.01l-.29.42c-.25.36-.58.65-.95.87a2.93 2.93 0 0 1-3.16-.14 2.95 2.95 0 0 1-1.23-1.91c-.12-.68 0-1.38.36-1.98.03-.08.08-.15.13-.23l.75-1.08 1.24-1.77c.09-.13.11-.3.06-.45a.5.5 0 0 0-.34-.31l-1.42-.35-.23-.06a2.9 2.9 0 0 1-1.23-.66 2.954 2.954 0 0 1 2.68-5.08l1.27.32a4.148 4.148 0 0 1 3.75-5.91c2.28 0 4.14 1.86 4.14 4.14 0 .64-.15 1.23-.41 1.76l1.3-.31a2.96 2.96 0 0 1 3.58 2.14 2.98 2.98 0 0 1-1.03 3.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.967 12.416a.755.755 0 0 0-.75.755.75.75 0 0 0 1.5 0v-.01a.746.746 0 0 0-.75-.745M11.967 14.99a.755.755 0 0 0-.75.756.75.75 0 0 0 1.5 0v-.01a.746.746 0 0 0-.75-.745M18.97 18.262c-.05.02-.1.03-.15.04l-1.36.2-.2 1.36c-.04.33-.3.59-.63.64l-1.37.19-.19 1.37c-.01.07-.03.15-.07.21-.42-.21-.78-.53-1.05-.92l-.25-.36.16-1.07c.04-.33.3-.59.63-.63l1.37-.2.19-1.36c.05-.33.31-.59.64-.64l1.37-.19.74 1.06c.07.1.13.2.17.3M18.05 14.042l-.84-.73a.75.75 0 0 1-.21-.84l.33-.82-.12-.1a.75.75 0 0 1-.13-1.06c.25-.32.72-.38 1.05-.12l.57.44c.26.21.36.56.24.87l-.35.85.99.86zM6.9 12.332c.12.3.04.63-.2.84l-.94.83-.23-.06a2.9 2.9 0 0 1-1.23-.66l1.01-.88-.34-.85a.74.74 0 0 1 .23-.87l.57-.45c.33-.26.8-.2 1.06.13.25.32.19.8-.13 1.05l-.13.1zM10.61 20.922v.01l-.29.42c-.25.36-.58.65-.95.87a.7.7 0 0 1-.14-.33l-.18-1.29-1.29-.18a.76.76 0 0 1-.64-.64l-.18-1.28-1.29-.19a.8.8 0 0 1-.31-.12c.03-.08.08-.15.13-.23l.75-1.08 1.49.21c.33.05.59.31.64.64l.18 1.28 1.29.19c.33.05.59.3.64.63zM11.99 7.416c-.038.022-.097.045-.091.057l-.006-.007a.75.75 0 0 0-1.117 1.002c.284.316.67.49 1.088.49h.016c.494-.005.98-.262 1.187-.502a.75.75 0 0 0-1.077-1.04M12.942 5.209a.75.75 0 0 0 0 1.5h.008a.747.747 0 0 0 .746-.75c0-.414-.34-.75-.754-.75M10.984 6.709h.008a.747.747 0 0 0 .746-.75c0-.414-.34-.75-.754-.75a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGingerbreadBulk;
