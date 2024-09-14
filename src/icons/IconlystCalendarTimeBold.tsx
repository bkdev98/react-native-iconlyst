import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarTimeBold = ({
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
      fillRule="evenodd"
      d="M6.743 10.522c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h8.49c.42 0 .75.33.75.75 0 .41-.33.75-.75.75zm10.63 1.31c.675 0 1.328.113 1.94.331a.21.21 0 0 0 .28-.192V8.212c0-1.41-.43-2.58-1.24-3.4-.72-.72-1.75-1.13-2.98-1.23v-.97a.749.749 0 1 0-1.5 0v3.55c-.06.02-.13.04-.2.04-.41 0-.75-.33-.75-.75v-1.72a.2.2 0 0 0-.2-.2h-4.62v-.92c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.55c-.07.02-.13.04-.2.04-.42 0-.75-.33-.75-.75V3.99a.193.193 0 0 0-.248-.188c-1.908.581-3.012 2.128-3.012 4.411v8.15c0 2.98 1.79 4.75 4.79 4.75h4.963c.162 0 .259-.184.174-.322a5.8 5.8 0 0 1-.857-3.058c0-3.26 2.65-5.9 5.91-5.9"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.227 19.132a.75.75 0 0 1-1.028.259l-1.236-.738a.75.75 0 0 1-.365-.643v-1.587a.75.75 0 0 1 1.5 0v1.16l.87.52a.75.75 0 0 1 .26 1.029m-1.857-5.803a4.41 4.41 0 0 0-4.404 4.405 4.41 4.41 0 0 0 4.404 4.404 4.41 4.41 0 0 0 4.405-4.404 4.41 4.41 0 0 0-4.405-4.405"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarTimeBold;
