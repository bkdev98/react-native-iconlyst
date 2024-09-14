import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindRainyOutline = ({
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
      d="M10.412 20.72c-.98 0-1.91-.38-2.61-1.08a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .82.83 2.26.83 3.09 0 .41-.41.64-.96.64-1.54s-.23-1.13-.64-1.55c-.41-.41-.96-.64-1.54-.64h-3.43c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.43c.98 0 1.91.38 2.6 1.08.7.7 1.08 1.63 1.08 2.61s-.38 1.91-1.08 2.6a3.63 3.63 0 0 1-2.6 1.08M12.872 9.99h-9.03c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.03c.5 0 .97-.19 1.31-.54.72-.73.72-1.91 0-2.63-.35-.35-.82-.54-1.31-.54-.5 0-.96.19-1.31.55-.29.29-.77.29-1.06 0a.755.755 0 0 1 0-1.06c.63-.63 1.48-.99 2.37-.99.9 0 1.74.35 2.37.99a3.36 3.36 0 0 1 0 4.75c-.63.63-1.47.98-2.38.98zM18.782 17.02c-.78 0-1.51-.31-2.06-.86a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a1.4 1.4 0 0 0 2 0 1.4 1.4 0 0 0 0-2c-.26-.26-.62-.41-1-.41h-4.14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.14c.78 0 1.51.3 2.06.85.55.56.86 1.29.86 2.07s-.3 1.51-.86 2.06c-.55.55-1.28.86-2.06.86zM4.072 20.72a.7.7 0 0 1-.31-.07.746.746 0 0 1-.37-.99l.46-1.01c.17-.38.62-.54.99-.37.38.17.54.62.37.99l-.46 1.01a.74.74 0 0 1-.68.44M19.302 6.79c-.1 0-.21-.02-.31-.07a.746.746 0 0 1-.37-.99l.91-2.01c.17-.38.62-.54.99-.37.38.17.54.62.37.99l-.91 2.01a.75.75 0 0 1-.68.44M15.752 20.72a.7.7 0 0 1-.31-.07.746.746 0 0 1-.37-.99l.56-1.22c.17-.38.62-.54.99-.37.38.17.54.62.37.99l-.56 1.22a.75.75 0 0 1-.68.44"
    />
    <Path
      fill={props.color}
      d="M5.922 7.08a.7.7 0 0 1-.31-.07.746.746 0 0 1-.37-.99l.91-2.01c.17-.38.62-.54.99-.37.38.17.54.62.37.99l-.91 2.01a.75.75 0 0 1-.68.44M4.301 14.86a.76.76 0 0 1-.58-1.24c.29-.34.87-.34 1.16 0 .14.17.21.4.17.61-.07.36-.38.63-.74.63zM21.132 19.22c-.22 0-.44-.1-.58-.27s-.2-.4-.16-.62a.76.76 0 0 1 .74-.61c.36 0 .67.26.74.61.04.22-.01.45-.16.62s-.36.27-.58.27M21.382 10a.76.76 0 0 1-.74-.9.76.76 0 0 1 .74-.61.76.76 0 0 1 .74.9.76.76 0 0 1-.74.61"
    />
  </Svg>
);
export default IconlystWindRainyOutline;