import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowTreeBulk = ({
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
      d="M18.335 17.616a14.6 14.6 0 0 1-1.48-1.88c-.31-.43-.59-.88-.85-1.36-.04-.06-.07-.12-.11-.19h1.25c.2 0 .38-.11.46-.29s.05-.39-.07-.54c-.59-.69-1.17-1.45-1.73-2.26a37.9 37.9 0 0 1-2.52-4.29c-.07-.12-.13-.25-.2-.38-.17-.34-.73-.34-.9 0-.06.13-.13.25-.2.38-.79 1.56-1.61 2.95-2.45 4.19v.01c-.45.66-.91 1.27-1.37 1.85-.14.17-.28.34-.42.5-.13.15-.16.36-.07.54.08.18.25.29.45.29h1.25c-.3.56-.63 1.09-.98 1.59-.44.65-.91 1.24-1.42 1.79-.01.02-.03.03-.04.05a.51.51 0 0 0-.09.54c.08.18.26.3.46.3h10.66c.2 0 .38-.12.46-.3s.05-.39-.09-.54M7.1 7.6a.64.64 0 0 0-.234-.875l-.931-.538.931-.537a.64.64 0 1 0-.64-1.108l-.929.536V4.004a.64.64 0 0 0-1.281 0V5.08l-.931-.537a.64.64 0 1 0-.64 1.108l.93.537-.93.538a.64.64 0 1 0 .64 1.108l.931-.537V8.37a.64.64 0 0 0 1.281 0V7.297l.929.536A.64.64 0 0 0 7.1 7.6"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.886 21.116a.749.749 0 1 0 1.5 0v-2.66h-1.5zM14.936 9.756l-5.4 1.24v.01c-.45.66-.91 1.27-1.37 1.85l7.64-1.76c-.29-.43-.58-.87-.87-1.34M8.396 15.776c-.44.65-.91 1.24-1.42 1.79l9.85-1.82c.01 0 .02 0 .03-.01-.31-.43-.59-.88-.85-1.36zM21.521 7.877a2.05 2.05 0 0 1-1.37-1.37c-.129-.421-.828-.421-.957 0-.2.658-.712 1.17-1.37 1.37a.501.501 0 0 0 0 .957c.658.2 1.17.712 1.37 1.371a.5.5 0 0 0 .957 0c.2-.659.712-1.171 1.37-1.371a.5.5 0 0 0 0-.957M12.636 6.942c.897 0 1.627-.73 1.627-1.627s-.73-1.626-1.627-1.626c-.896 0-1.626.73-1.626 1.626 0 .897.73 1.627 1.626 1.627"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowTreeBulk;
