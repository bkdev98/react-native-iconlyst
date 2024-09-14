import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomePowerOutline = ({
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
      fillRule="evenodd"
      d="M10.601 4.517a2.214 2.214 0 0 1 2.796 0zm0 0-5.573 4.54a2.22 2.22 0 0 0-.816 1.717v7.174a2.57 2.57 0 0 0 2.572 2.572h10.43a2.57 2.57 0 0 0 2.573-2.572v-7.174c0-.665-.3-1.296-.816-1.717l-5.574-4.54M9.654 3.353a3.714 3.714 0 0 1 4.69 0l5.575 4.541a3.72 3.72 0 0 1 1.368 2.88v7.174a4.07 4.07 0 0 1-4.072 4.072H6.784a4.07 4.07 0 0 1-4.072-4.072v-7.174c0-1.117.502-2.174 1.368-2.88z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.521 11.618v1.904a2.478 2.478 0 0 0 4.956 0v-1.905zm-1.5 1.904v-2.015c0-.767.623-1.39 1.39-1.39h5.177c.767 0 1.39.623 1.39 1.39v2.015a3.978 3.978 0 1 1-7.957 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 16.004a.75.75 0 0 1 .75.75v4.505a.75.75 0 0 1-1.5 0v-4.505a.75.75 0 0 1 .75-.75M10.315 11.617a.75.75 0 0 1-.75-.75V8.784a.75.75 0 1 1 1.5 0v2.083a.75.75 0 0 1-.75.75m3.368 0a.75.75 0 0 1-.75-.75V8.784a.75.75 0 0 1 1.5 0v2.083a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomePowerOutline;
