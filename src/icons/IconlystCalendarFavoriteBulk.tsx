import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarFavoriteBulk = ({
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
      <Path d="M12.583 18.081c.685-.445 1.78-1.312 2.063-2.208.196-.61.036-1.373-.642-1.592a1.11 1.11 0 0 0-.974.167.75.75 0 0 1-.897-.003 1.07 1.07 0 0 0-.972-.163c-.675.217-.833.979-.64 1.586.292.909 1.38 1.772 2.062 2.213" />
      <Path d="M10.703 12.853a2.58 2.58 0 0 1 1.884.123 2.6 2.6 0 0 1 1.87-.124c1.392.447 2.1 1.973 1.618 3.474-.58 1.844-2.871 3.146-3.131 3.288a.75.75 0 0 1-.72.001c-.256-.14-2.532-1.424-3.13-3.288h-.001c-.48-1.503.227-3.029 1.61-3.474m-6.72 4.01c0 2.98 1.79 4.76 4.79 4.76h7.62c3 0 4.79-1.75 4.79-4.69v-5.71a.2.2 0 0 0-.2-.2h-16.8a.2.2 0 0 0-.2.2z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.954 5.325c-.73-.72-1.76-1.13-2.98-1.24v-.96a.749.749 0 1 0-1.5 0v3.55c-.07.02-.13.04-.2.04-.42 0-.75-.34-.75-.75v-1.72a.2.2 0 0 0-.2-.2h-4.63v-.92a.749.749 0 1 0-1.5 0v3.55c-.06.02-.13.04-.2.04-.41 0-.75-.34-.75-.75V4.501a.193.193 0 0 0-.247-.189c-1.909.573-3.013 2.12-3.013 4.413v.6c0 .11.09.2.2.2h16.8a.2.2 0 0 0 .2-.2v-.6c0-1.41-.42-2.59-1.23-3.4M12.587 12.98a2.58 2.58 0 0 0-1.884-.123c-1.383.445-2.09 1.97-1.61 3.473h.001c.598 1.865 2.874 3.149 3.131 3.289a.75.75 0 0 0 .719-.001c.26-.142 2.551-1.444 3.131-3.288.482-1.501-.226-3.027-1.617-3.474a2.6 2.6 0 0 0-1.871.124m2.059 2.896c-.282.896-1.378 1.763-2.063 2.208-.681-.44-1.77-1.304-2.062-2.213-.193-.607-.035-1.369.64-1.586a1.07 1.07 0 0 1 .972.163c.266.201.63.2.897.003a1.11 1.11 0 0 1 .974-.167c.678.22.838.982.642 1.592"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarFavoriteBulk;
