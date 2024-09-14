import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdRefreshBulk = ({
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
      d="M17.536 3.125H7.466c-2.67 0-4.464 1.877-4.464 4.67v.08a.3.3 0 0 0 .3.3H21.7a.3.3 0 0 0 .3-.3v-.08c0-2.793-1.794-4.67-4.464-4.67M17.883 13.003c-.956 0-1.88.346-2.603.974a.751.751 0 0 0 .985 1.132 2.47 2.47 0 0 1 1.617-.606 2.44 2.44 0 0 1 2.438 2.44.75.75 0 0 0 1.5 0 3.943 3.943 0 0 0-3.937-3.94M19.499 18.767a2.45 2.45 0 0 1-1.616.605 2.437 2.437 0 0 1-2.44-2.429.75.75 0 0 0-1.5 0 3.94 3.94 0 0 0 3.94 3.93c.957 0 1.88-.346 2.602-.975a.751.751 0 0 0-.986-1.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3 14.372c0 2.79 1.8 4.67 4.47 4.67h4.2a.317.317 0 0 0 .3-.395q-.16-.675-.16-1.405c0-3.47 2.81-6.27 6.27-6.27 1.254 0 2.43.366 3.41 1.008.212.138.51-.006.51-.259v-1.75a.3.3 0 0 0-.3-.3H3.3a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBankCarrdRefreshBulk;
