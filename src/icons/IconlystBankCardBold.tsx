import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardBold = ({
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
      d="M17.035 2.984H6.964c-2.67 0-4.463 1.877-4.463 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3v-.08c0-2.793-1.794-4.67-4.464-4.67M2.505 14.232c0 2.8 1.79 4.67 4.46 4.67h4.275a.31.31 0 0 0 .305-.334c-.065-.947.02-1.933.02-2.876 0-2.5 1.84-4.39 4.29-4.39h3.17c.717 0 1.392.166 1.975.462.216.11.495-.037.495-.28V9.831a.3.3 0 0 0-.3-.3H2.805a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.023 13.305h-.833v3.099h3.129v-.708c0-1.408-.944-2.391-2.296-2.391M13.56 15.695v.708h3.13v-3.099h-.834c-1.352 0-2.295.984-2.295 2.391M13.56 18.625c0 1.407.944 2.39 2.296 2.39h.834v-3.112h-3.13zM18.19 21.015h.833c1.352 0 2.296-.982 2.296-2.39v-.721h-3.13z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardBold;
