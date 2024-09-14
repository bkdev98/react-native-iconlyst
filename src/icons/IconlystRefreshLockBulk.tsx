import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshLockBulk = ({
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
      d="M21.303 7.653a.75.75 0 0 0-.783-.122l-.743.316c-1.775-3.462-5.664-5.566-9.666-4.9a9.1 9.1 0 0 0-5.959 3.71 9.1 9.1 0 0 0-1.59 6.832 9.12 9.12 0 0 0 3.708 5.964 9.1 9.1 0 0 0 6.837 1.594 9.18 9.18 0 0 0 6.802-5.151.75.75 0 1 0-1.357-.64 7.68 7.68 0 0 1-5.69 4.31 7.6 7.6 0 0 1-5.719-1.333 7.63 7.63 0 0 1-3.103-4.99 7.62 7.62 0 0 1 1.331-5.712 7.62 7.62 0 0 1 4.985-3.104c3.313-.551 6.536 1.165 8.042 4.006l-.782.332a.752.752 0 0 0-.099 1.329l2.228 1.37a.75.75 0 0 0 .673.057.75.75 0 0 0 .446-.507l.675-2.604a.75.75 0 0 0-.236-.757"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.605 10.557a2.01 2.01 0 1 0-3.199 1.62l-.623 1.87a.852.852 0 0 0 .81 1.12h2.005c.581 0 .991-.57.81-1.12l-.624-1.87c.496-.37.821-.95.821-1.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshLockBulk;
