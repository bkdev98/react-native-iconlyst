import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeightsBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M18.944 3.784a1.534 1.534 0 0 0-1.71-1.27l-1.05.16a1.525 1.525 0 0 0-1.24 1.72l.251 1.652a.3.3 0 0 1-.251.342l-3.049.464a.3.3 0 0 1-.341-.251l-.25-1.64a1.52 1.52 0 0 0-1.692-1.286l-1.076.165-.024.004c-.8.162-1.33.92-1.207 1.726q.405 2.686.819 5.371a1.53 1.53 0 0 0 1.707 1.27l1.05-.16a1.525 1.525 0 0 0 1.242-1.72l-.253-1.654a.3.3 0 0 1 .252-.342l3.048-.464a.3.3 0 0 1 .342.25l.25 1.641a1.53 1.53 0 0 0 1.523 1.295q.082 0 .168-.008l1.077-.163.024-.004a1.53 1.53 0 0 0 1.207-1.729q-.405-2.684-.817-5.369M21.292 4.698a.749.749 0 1 0-1.482.227l.441 2.895a.75.75 0 1 0 1.482-.227zM6.513 10.664a.75.75 0 0 0 .742-.863l-.441-2.895a.75.75 0 0 0-1.483.226l.442 2.895a.75.75 0 0 0 .74.637" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.72 13.027h-1.062a1.527 1.527 0 0 0-1.486 1.514v1.673a.3.3 0 0 1-.3.3H8.789a.3.3 0 0 1-.3-.3q.002-.83 0-1.66a1.536 1.536 0 0 0-1.48-1.527H5.898a1.53 1.53 0 0 0-1.452 1.527q-.005 2.715 0 5.431A1.527 1.527 0 0 0 5.94 21.5h1.062a1.525 1.525 0 0 0 1.487-1.514v-1.671a.3.3 0 0 1 .3-.3h3.082a.3.3 0 0 1 .3.3v1.658a1.536 1.536 0 0 0 1.48 1.527h1.1139999999999999a1.53 1.53 0 0 0 1.452-1.527q.005-2.715 0-5.43a1.53 1.53 0 0 0-1.497-1.515M3.008 15.048a.75.75 0 0 0-.75.75v2.93a.75.75 0 0 0 1.5 0v-2.93a.75.75 0 0 0-.75-.75M17.655 15.048a.75.75 0 0 0-.75.75v2.93a.75.75 0 0 0 1.5 0v-2.93a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWeightsBulk;
