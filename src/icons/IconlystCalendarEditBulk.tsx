import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarEditBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m11.744 17.654 2.64-2.88c.03-.04.03-.1-.01-.13l-.56-.52h-.12l-2.66 2.91c-.1.1-.16.24-.17.39l-.06.55.52-.09c.16-.03.31-.11.42-.23" />
      <Path d="M9.364 17.263c.05-.46.24-.89.55-1.24l2.67-2.91c.29-.31.69-.5 1.11-.51.42-.02.83.13 1.14.42l.56.52c.64.6.68 1.6.09 2.24l-2.63 2.88c-.33.36-.78.61-1.28.7l-.61.1c-.08.01-.16.02-.24.02-.36 0-.71-.14-.98-.39a1.42 1.42 0 0 1-.44-1.2zm-5.38-.4c0 2.98 1.79 4.76 4.79 4.76h7.62c3 0 4.79-1.75 4.79-4.69v-5.71a.2.2 0 0 0-.2-.2h-16.8a.2.2 0 0 0-.2.2z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.954 5.325c-.73-.72-1.76-1.13-2.98-1.24v-.96a.749.749 0 1 0-1.5 0v3.55c-.07.02-.13.04-.2.04-.42 0-.75-.34-.75-.75v-1.72a.2.2 0 0 0-.2-.2h-4.63v-.92a.749.749 0 1 0-1.5 0v3.55c-.06.02-.13.04-.2.04-.41 0-.75-.34-.75-.75V4.501a.193.193 0 0 0-.247-.189c-1.909.573-3.013 2.12-3.013 4.413v.6c0 .11.09.2.2.2h16.8a.2.2 0 0 0 .2-.2v-.6c0-1.41-.42-2.59-1.23-3.4M9.914 16.023c-.31.35-.5.78-.55 1.24l-.06.63c-.05.45.11.89.44 1.2.27.25.62.39.98.39.08 0 .16-.01.24-.02l.61-.1c.5-.09.95-.34 1.28-.7l2.63-2.88c.59-.64.55-1.64-.09-2.24l-.56-.52c-.31-.29-.72-.44-1.14-.42-.42.01-.82.2-1.11.51zm4.47-1.25-2.64 2.88c-.11.12-.26.2-.42.23l-.52.09.06-.55c.01-.15.07-.29.17-.39l2.66-2.91h.12l.56.52c.04.03.04.09.01.13"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarEditBulk;
