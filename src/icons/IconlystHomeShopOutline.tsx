import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeShopOutline = ({
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
      d="M11.507 12.282c.555-.595 1.337-.917 2.23-.917h4.064c.895 0 1.678.321 2.233.917.55.59.82 1.39.82 2.254v3.829c0 .864-.27 1.663-.82 2.253-.555.596-1.338.917-2.233.917h-4.063c-.896 0-1.679-.32-2.234-.917-.549-.59-.82-1.39-.82-2.253v-3.829c0-.865.273-1.664.823-2.254m1.097 1.023c-.248.266-.42.677-.42 1.231v3.829c0 .554.171.966.418 1.231.242.26.61.44 1.136.44H17.8c.524 0 .894-.18 1.135-.44.248-.266.419-.677.419-1.231v-3.829c0-.554-.171-.966-.419-1.231-.241-.26-.61-.44-1.135-.44h-4.063c-.522 0-.892.18-1.134.44"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.95 14.517a.75.75 0 0 1 .874.6c.081.44.465.776.946.776a.96.96 0 0 0 .947-.776.75.75 0 0 1 1.475.274 2.46 2.46 0 0 1-2.422 2.002 2.45 2.45 0 0 1-2.421-2.002.75.75 0 0 1 .6-.874M10.31 3.139a3.13 3.13 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.958a1.63 1.63 0 0 0-2.018 0l-7.525 5.958a.75.75 0 1 1-.931-1.176z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.754 7.754a.75.75 0 0 1 .75.75v1.523a.75.75 0 0 1-1.5 0V8.504a.75.75 0 0 1 .75-.75M4.748 7.754a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h1.877a.75.75 0 0 1 0 1.5H7.812a3.814 3.814 0 0 1-3.814-3.814V8.504a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeShopOutline;
