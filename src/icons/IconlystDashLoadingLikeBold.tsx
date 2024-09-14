import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashLoadingLikeBold = ({
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
      d="M5.253 7.38a.75.75 0 0 0 .604-.304A8.4 8.4 0 0 1 7.19 5.652a.748.748 0 1 0-.969-1.144 10 10 0 0 0-1.57 1.676.752.752 0 0 0 .602 1.196M3.56 13.329a.75.75 0 0 0 .692-.804 8.2 8.2 0 0 1 .274-2.777.75.75 0 0 0-1.447-.395 9.7 9.7 0 0 0-.323 3.284.75.75 0 0 0 .804.692M4.895 15.278a.75.75 0 1 0-1.373.604A9.76 9.76 0 0 0 6.9 19.975a.748.748 0 1 0 .855-1.232 8.27 8.27 0 0 1-2.86-3.465M17.575 18.5a8.17 8.17 0 0 1-4.473 1.723 8.1 8.1 0 0 1-2.422-.175.75.75 0 0 0-.897.565.75.75 0 0 0 .566.898 9.6 9.6 0 0 0 2.863.208 9.67 9.67 0 0 0 5.287-2.038.75.75 0 0 0-.924-1.182M12.09 2.26a.75.75 0 0 0-.721.778c.016.414.404.759.778.72 4.57-.186 8.396 3.386 8.57 7.93a8.15 8.15 0 0 1-1.231 4.636.75.75 0 1 0 1.273.793 9.64 9.64 0 0 0 1.457-5.485c-.206-5.373-4.748-9.6-10.126-9.371"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.238 16.49a.5.5 0 0 0 .48-.002c.13-.072 3.204-1.782 3.931-4.094.284-.883.22-1.832-.178-2.602a2.76 2.76 0 0 0-1.648-1.389 2.93 2.93 0 0 0-2.344.248 2.93 2.93 0 0 0-2.352-.248 2.75 2.75 0 0 0-1.645 1.385c-.398.77-.463 1.72-.179 2.605.753 2.343 3.805 4.026 3.935 4.096"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashLoadingLikeBold;
