import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasTreeBulk = ({
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
      d="M17.068 13.704a.5.5 0 0 0-.125-.135 45 45 0 0 1-2.532.085c-3.014 0-4.918-.41-6.808-1.198-.213.848-.738 2.236-1.805 3.671 6.308.215 9.79-1.305 11.27-2.423M7.148 10.61c2.526 1.231 4.654 1.792 10.158 1.44-1.228-1.269-2.224-2.939-2.82-4.134-1.428.51-3.473 1-6.202 1.241a7.6 7.6 0 0 1-1.136 1.453M14.877 6.146l-.295-.32c-.854-.923-2.143-2.317-2.46-2.843a.49.49 0 0 0-.45-.24.5.5 0 0 0-.428.279c-.997 2.04-1.787 3.022-3.28 4.656 3.484-.29 5.73-.993 6.913-1.532M18.551 18.32a.48.48 0 0 1-.3.41c-.89.37-2.95 1.14-5.41 1.42-.49.05-.99.09-1.5.1h-.26c-1.71 0-3.51-.3-5.18-1.15a.506.506 0 0 1-.23-.66l.38-.81c.32.01.65.02.96.02 4.51 0 7.63-.88 9.61-1.9.34.76.94 1.59 1.71 2.1.16.11.24.28.22.47"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.341 21.739c0 .42.33.75.75.75.41 0 .75-.33.75-.75v-1.59c-.49.05-.99.09-1.5.1zM8.241 8.649l.31-.02c-.07.18-.15.35-.25.52 2.72-.23 4.77-.72 6.19-1.23-.11-.21-.2-.41-.28-.58l.61-.36c.13-.08.22-.21.24-.36s-.02-.3-.13-.41l-.06-.06c-1.18.54-3.43 1.24-6.91 1.53-.04.04-.08.09-.12.13a.5.5 0 0 0-.08.56c.08.18.26.29.48.28M17.381 12.129a.5.5 0 0 1-.07-.08c-5.51.36-7.63-.21-10.16-1.44-.09.09-.16.17-.23.23-.11.1-.17.25-.15.4.01.15.09.29.22.38l.69.47c-.02.1-.05.23-.09.36 1.9.8 3.8 1.2 6.82 1.2.77 0 1.61-.03 2.54-.08-.2-.14-.41-.33-.6-.52l.72-.07a.5.5 0 0 0 .43-.32c.06-.19.02-.39-.12-.53M5.791 16.129q-.105.165-.24.33c-.11.14-.14.34-.06.52.08.17.24.28.43.29l.3.01-.17.36c.33.01.65.01.96.01 4.51 0 7.64-.87 9.61-1.89-.12-.26-.2-.51-.25-.74l.65-.7c.1-.1.15-.24.14-.39a.5.5 0 0 0-.09-.22c-1.49 1.12-4.98 2.64-11.28 2.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasTreeBulk;