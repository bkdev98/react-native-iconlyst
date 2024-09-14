import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarSearchBold = ({
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
      d="M7.342 10.424c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h8.49c.42 0 .75.33.75.75 0 .41-.33.75-.75.75zm9.92 2.11c.942 0 1.83.233 2.608.65.138.074.312-.023.312-.18v-4.89c.01-1.41-.42-2.58-1.23-3.4-.72-.72-1.75-1.13-2.98-1.23v-.97c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.55c-.07.02-.13.04-.2.04-.42 0-.75-.33-.75-.75v-1.72a.2.2 0 0 0-.2-.2h-4.62v-.92a.749.749 0 1 0-1.5 0v3.55c-.07.02-.13.04-.2.04-.42 0-.75-.33-.75-.75V3.891a.193.193 0 0 0-.248-.188c-1.909.581-3.022 2.128-3.022 4.411v8.15c0 2.98 1.8 4.75 4.8 4.75h4.37c.156 0 .253-.173.18-.312a5.5 5.5 0 0 1-.65-2.598c0-3.07 2.5-5.57 5.58-5.57"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.073 20.069a2.09 2.09 0 0 1-2.09-2.09c0-1.153.937-2.091 2.09-2.091s2.09.938 2.09 2.09c0 1.154-.938 2.09-2.09 2.09m3.893.886-.942-.94a3.56 3.56 0 0 0 .64-2.036 3.595 3.595 0 0 0-3.59-3.591 3.595 3.595 0 0 0-3.592 3.59c0 1.98 1.611 3.59 3.591 3.59.68 0 1.31-.2 1.852-.53l.981.979a.747.747 0 0 0 1.061-.001.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarSearchBold;
