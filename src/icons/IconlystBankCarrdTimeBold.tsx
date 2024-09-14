import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdTimeBold = ({
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
      d="M20.927 7.338c0-2.793-1.794-4.67-4.465-4.67H6.392c-2.67 0-4.463 1.877-4.463 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3zM17.535 10.513c1.046 0 2.042.263 2.916.723.21.11.474-.035.474-.273v-1.45a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3v4.4c0 2.8 1.8 4.67 4.47 4.67h4.718c.2 0 .345-.194.3-.39a6.29 6.29 0 0 1 6.122-7.68"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.538 19.833a3.04 3.04 0 0 1-3.036-3.04 3.036 3.036 0 0 1 6.073 0 3.04 3.04 0 0 1-3.037 3.04m0-7.57a4.54 4.54 0 0 0-4.536 4.53 4.543 4.543 0 0 0 4.536 4.54 4.543 4.543 0 0 0 4.537-4.54 4.54 4.54 0 0 0-4.537-4.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.098 17.14-.83-.494v-1.112a.75.75 0 1 0-1.5 0v1.54c0 .263.14.508.367.643l1.197.711a.75.75 0 1 0 .766-1.289"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdTimeBold;
