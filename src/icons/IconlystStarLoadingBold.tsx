import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLoadingBold = ({
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
      d="M4.779 8.3a.75.75 0 0 0 .604-.303 8.4 8.4 0 0 1 1.333-1.423.75.75 0 0 0-.97-1.146 10 10 0 0 0-1.57 1.677.75.75 0 0 0 .603 1.196M17.097 19.412a8.18 8.18 0 0 1-4.47 1.731 8.3 8.3 0 0 1-2.425-.174.75.75 0 0 0-.327 1.464 9.7 9.7 0 0 0 2.866.206 9.7 9.7 0 0 0 5.286-2.049.751.751 0 0 0-.93-1.178M4.416 16.197a.75.75 0 1 0-1.371.607 9.8 9.8 0 0 0 3.377 4.093.75.75 0 0 0 .855-1.232 8.3 8.3 0 0 1-2.861-3.468M3.081 14.24a.75.75 0 0 0 .693-.804 8.2 8.2 0 0 1 .274-2.777.749.749 0 1 0-1.446-.397 9.7 9.7 0 0 0-.324 3.284.75.75 0 0 0 .747.695q.027 0 .056-.002M11.615 3.171a.75.75 0 0 0-.722.778c.016.414.372.75.78.721 4.562-.158 8.394 3.388 8.568 7.94a8.2 8.2 0 0 1-1.232 4.635.75.75 0 0 0 1.274.79 9.68 9.68 0 0 0 1.457-5.483c-.206-5.378-4.748-9.584-10.125-9.38"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.7 16.944q.143.042.288.042a.96.96 0 0 0 .469-.121l1.556-.79 1.537.793c.182.09.388.13.635.105.553-.1.92-.612.832-1.178l-.291-1.683 1.243-1.193a1.008 1.008 0 0 0-.562-1.723l-1.73-.26-.768-1.53-.008-.014a1.06 1.06 0 0 0-.434-.427 1.03 1.03 0 0 0-1.375.442l-.783 1.539-1.73.252c-.22.039-.417.14-.571.295a1.02 1.02 0 0 0 .027 1.43l1.243 1.193-.294 1.694a1.02 1.02 0 0 0 .105.636c.128.24.35.42.61.498"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarLoadingBold;
