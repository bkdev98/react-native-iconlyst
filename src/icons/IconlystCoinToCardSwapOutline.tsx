import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinToCardSwapOutline = ({
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
      d="M3.27 12.83c.52-.558 1.252-.857 2.084-.857h5.344c.834 0 1.567.299 2.087.858.515.553.767 1.3.767 2.102v3.497c0 .802-.252 1.548-.767 2.102-.52.559-1.253.858-2.087.858H5.354c-.834 0-1.566-.3-2.087-.858-.515-.554-.766-1.3-.766-2.102v-3.497c0-.803.253-1.55.768-2.102m1.096 1.023c-.213.23-.365.588-.365 1.08v3.497c0 .492.152.851.364 1.08.207.222.526.38.99.38h5.343c.463 0 .782-.158.99-.38.212-.229.364-.588.364-1.08v-3.497c0-.493-.152-.852-.365-1.08-.207-.222-.525-.38-.989-.38H5.354c-.46 0-.78.158-.988.38"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 15.533a.75.75 0 0 1 .75-.75h9.552a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M12.9 7.16a4.55 4.55 0 1 1 9.1.002 4.55 4.55 0 0 1-9.1-.001m4.55-3.049a3.05 3.05 0 1 0 0 6.1 3.05 3.05 0 0 0 0-6.1M21.25 14.777a.75.75 0 0 1 .75.75 5.86 5.86 0 0 1-5.861 5.861.75.75 0 0 1-.703-1.011l.606-1.633a.75.75 0 1 1 1.406.523l-.175.472a4.36 4.36 0 0 0 3.226-4.212.75.75 0 0 1 .75-.75M7.227 4.258A4.36 4.36 0 0 0 4 8.47a.75.75 0 0 1-1.5 0 5.86 5.86 0 0 1 5.86-5.86.75.75 0 0 1 .704 1.01l-.607 1.633a.75.75 0 0 1-1.406-.522z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinToCardSwapOutline;
