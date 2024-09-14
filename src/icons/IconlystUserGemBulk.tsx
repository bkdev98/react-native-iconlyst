import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserGemBulk = ({
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
      d="m15.466 16.676 1.586 1.764 1.589-1.766-.297-.533h-2.577zm1.586 4.259c-.283 0-.554-.121-.743-.331l-2.81-3.124a1 1 0 0 1-.128-1.16l.94-1.67a1 1 0 0 1 .871-.51h3.75a1 1 0 0 1 .873.515l.931 1.669a1 1 0 0 1-.13 1.156l-2.811 3.124c-.189.21-.46.33-.743.33M10.65 3.063a4.88 4.88 0 0 0-4.876 4.874 4.88 4.88 0 0 0 4.875 4.876 4.88 4.88 0 0 0 4.875-4.876 4.88 4.88 0 0 0-4.875-4.874"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.648 14.332c-4.98 0-7.21 2.75-7.21 5.48a.75.75 0 0 0 .75.75l5.81-.009 1.177-.002q.157-.005.305-.054c.425-.121.7-.469.7-.964V15.35c0-.612-.444-1.018-1.532-1.018"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserGemBulk;
