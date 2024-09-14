import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStarBulk = ({
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
      <Path d="m11.555 17.226-.097.553.517-.268c.33-.173.726-.17 1.057.002l.51.265-.095-.55c-.064-.373.06-.75.333-1.012l.395-.38-.558-.08a1.14 1.14 0 0 1-.857-.615l-.26-.519-.258.517a1.14 1.14 0 0 1-.861.618l-.555.08.397.38c.27.256.395.635.332 1.01" />
      <Path d="M9.213 14.795a1.13 1.13 0 0 1 .665-.339l1.107-.158.496-.989a1.15 1.15 0 0 1 1.545-.498c.21.108.38.278.49.491l.005.007.495.99 1.11.158c.61.082 1.049.652.969 1.271a1.16 1.16 0 0 1-.332.664l-.805.771.19 1.08c.049.31-.023.611-.201.858a1.136 1.136 0 0 1-1.463.336l-.983-.509-.996.515a1.12 1.12 0 0 1-.862.08 1.136 1.136 0 0 1-.79-1.272l.19-1.087-.798-.765a1.14 1.14 0 0 1-.032-1.604M3.9 16.863c0 2.98 1.79 4.76 4.79 4.76h7.62c3 0 4.79-1.75 4.79-4.69v-5.71a.2.2 0 0 0-.2-.2H4.1a.2.2 0 0 0-.2.2z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.87 5.325c-.73-.72-1.76-1.13-2.98-1.24v-.96a.749.749 0 1 0-1.5 0v3.55c-.07.02-.13.04-.2.04-.42 0-.75-.34-.75-.75v-1.72a.2.2 0 0 0-.2-.2H9.61v-.92a.749.749 0 1 0-1.5 0v3.55c-.06.02-.13.04-.2.04-.41 0-.75-.34-.75-.75V4.501a.193.193 0 0 0-.247-.189C5.005 4.885 3.9 6.432 3.9 8.725v.6c0 .11.09.2.2.2h16.8a.2.2 0 0 0 .2-.2v-.6c0-1.41-.42-2.59-1.23-3.4M9.878 14.46a1.138 1.138 0 0 0-.633 1.943l.798.765-.19 1.087a1.136 1.136 0 0 0 1.652 1.192l.996-.515.983.509a1.136 1.136 0 0 0 1.463-.336c.178-.247.25-.55.2-.86l-.19-1.079.806-.77a1.137 1.137 0 0 0-.637-1.935l-1.11-.16-.495-.989-.002-.003-.002-.003a1.13 1.13 0 0 0-.491-.491 1.15 1.15 0 0 0-1.545.498l-.496.989zm1.58 3.322.097-.553a1.13 1.13 0 0 0-.332-1.009l-.397-.381.555-.079c.37-.052.692-.282.86-.618l.259-.517.26.519c.167.331.486.561.857.615l.558.08-.395.38a1.13 1.13 0 0 0-.333 1.012l.096.55-.511-.265a1.14 1.14 0 0 0-1.057-.002z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarStarBulk;
