import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletLoveOutline = ({
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
      d="M21.262 15.156h-3.808a3.284 3.284 0 0 1-3.28-3.282 3.283 3.283 0 0 1 3.28-3.28h3.808a.75.75 0 0 1 0 1.5h-3.808a1.782 1.782 0 0 0 0 3.562h3.808a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M17.26 12.57a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M16.327 21.059h-3.425a.75.75 0 1 1 0-1.5h3.425a4.19 4.19 0 0 0 4.186-4.187v-6.75a4.19 4.19 0 0 0-4.186-4.184H8.2a4.19 4.19 0 0 0-4.187 4.185v2.048a.75.75 0 1 1-1.5 0V8.623A5.69 5.69 0 0 1 8.2 2.938h8.127a5.69 5.69 0 0 1 5.686 5.685v6.75a5.69 5.69 0 0 1-5.686 5.685"
    />
    <Path
      fill={props.color}
      d="M6.77 21.06a.76.76 0 0 1-.381-.1l-.09-.054-.012-.007a13.6 13.6 0 0 1-2.351-1.831 5.2 5.2 0 0 1-1.244-1.976 3.106 3.106 0 0 1 1.842-4.028 2.97 2.97 0 0 1 2.235.172 2.96 2.96 0 0 1 2.23-.172 3.1 3.1 0 0 1 1.853 4.01 5.2 5.2 0 0 1-1.243 1.99 13.7 13.7 0 0 1-2.358 1.835l-.084.052a.75.75 0 0 1-.396.109m-1.33-6.642q-.227 0-.445.07a1.615 1.615 0 0 0-.875 2.122c.184.52.482.992.873 1.382.547.531 1.144 1.01 1.78 1.43.64-.421 1.239-.902 1.789-1.435.392-.393.69-.869.872-1.393a1.61 1.61 0 0 0-.89-2.109 1.46 1.46 0 0 0-1.324.225.75.75 0 0 1-.9 0 1.46 1.46 0 0 0-.88-.292"
    />
  </Svg>
);
export default IconlystWalletLoveOutline;
