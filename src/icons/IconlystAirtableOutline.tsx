import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirtableOutline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.972 2.449a2.75 2.75 0 0 1 2.054 0l7.655 3.078c.794.32.794 1.444 0 1.764l-7.655 3.078a2.75 2.75 0 0 1-2.054 0L3.317 7.291c-.794-.32-.794-1.444 0-1.764zm1.495 1.391c-.3-.12-.635-.12-.935 0L5.145 6.41l6.387 2.568c.3.121.635.121.935 0l6.386-2.568zM3.901 10.953v6.071L9.9 14.67v-1.366zm-1.5-.367c0-.88.887-1.485 1.706-1.163l6.498 2.547c.479.188.794.65.794 1.164v1.707c0 .514-.315.975-.793 1.163l-6.498 2.55A1.25 1.25 0 0 1 2.4 17.392zM19.886 9.43a1.25 1.25 0 0 1 1.713 1.16v7.228c0 .506-.305.962-.773 1.155l-6.499 2.682a1.25 1.25 0 0 1-1.726-1.156v-7.314c0-.511.312-.971.787-1.16zm.213 1.53-5.998 2.394v6.771l5.998-2.475z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirtableOutline;
