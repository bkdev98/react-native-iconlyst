import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileTableBold = ({
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
      d="M2.728 15.022a.3.3 0 0 0 .3.3h5.115a.3.3 0 0 0 .3-.3v-2.82a.3.3 0 0 0-.3-.3H3.028a.3.3 0 0 0-.3.3zM21.379 10.402a.294.294 0 0 0 .295-.315c-.253-3.202-1.865-4.723-5.052-4.723H13.97a1.66 1.66 0 0 1-1.313-.657l-.856-1.138A2.65 2.65 0 0 0 9.69 2.513H7.815c-3.423 0-5.087 1.907-5.087 5.828v1.76a.3.3 0 0 0 .3.3zM16.301 11.902a.3.3 0 0 0-.3.3v2.82a.3.3 0 0 0 .3.3h5.104a.3.3 0 0 0 .3-.298l.016-2.82a.3.3 0 0 0-.3-.302zM9.943 21.187a.3.3 0 0 0 .3.3H14.2a.3.3 0 0 0 .3-.3v-4.065a.3.3 0 0 0-.3-.3h-3.958a.3.3 0 0 0-.3.3zM9.943 15.022a.3.3 0 0 0 .3.3H14.2a.3.3 0 0 0 .3-.3v-2.82a.3.3 0 0 0-.3-.3h-3.958a.3.3 0 0 0-.3.3zM16.301 16.822a.3.3 0 0 0-.3.3v4.05c0 .168.137.303.305.295 2.864-.145 4.739-1.704 5.247-4.303a.29.29 0 0 0-.289-.342zM8.443 17.122a.3.3 0 0 0-.3-.3H3.166a.29.29 0 0 0-.289.342c.51 2.6 2.389 4.16 5.261 4.303a.29.29 0 0 0 .305-.295z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileTableBold;
