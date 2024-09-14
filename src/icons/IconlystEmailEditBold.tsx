import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailEditBold = ({
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
      d="M11.569 13.466q-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.2.4.2.9-.1 1.2l-4 3.2q-.75.6-1.8.6m1.507 4.772a3.78 3.78 0 0 1 1.073-2.388l2.97-3.266.084-.087a3.47 3.47 0 0 1 2.692-1.022q.378.028.732.14c.21.067.442-.08.442-.3v-2.55c0-3.1-2.2-5.5-5.1-5.5h-8.8c-2.9 0-5.1 2.4-5.1 5.5v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.1 1.4 3.5 1.4h5.592c.213 0 .359-.216.304-.422A3 3 0 0 1 13 18.768z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.422 15.654-3 3.2a.6.6 0 0 0-.076.096c-.139.206-.264.157-.383.174l-.752.148.101-.7a1 1 0 0 0 .007-.105c0-.047 0-.191.205-.396l2.974-3.273c.069-.068.134-.082.16-.082h.011q.032.043.069.08l.601.6c.107.109.099.232.083.258m.978-1.317-.57-.57a1.51 1.51 0 0 0-1.06-.547c-.481-.03-.968.154-1.356.54l-2.975 3.276c-.39.389-.603.863-.619 1.37l-.086.613c-.093.464.048.924.388 1.264.291.29.699.452 1.089.452q.135-.001.265-.026l.653-.094a1.79 1.79 0 0 0 1.425-.775l2.945-3.143c.613-.612.568-1.693-.099-2.36"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailEditBold;
