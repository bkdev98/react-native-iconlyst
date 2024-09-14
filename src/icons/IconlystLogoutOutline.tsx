import * as React from 'react';
import Svg, { Defs, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Defs>
      <Path id="prefix__a" d="M.11.335h4.427v7.331H.11z" />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path
        fill={props.color}
        d="M11.308 2a4.44 4.44 0 0 1 4.436 4.436v.932a.75.75 0 0 1-1.5 0v-.932A2.94 2.94 0 0 0 11.308 3.5H6.433A2.937 2.937 0 0 0 3.5 6.436v11.129A2.937 2.937 0 0 0 6.433 20.5h4.886a2.93 2.93 0 0 0 2.925-2.924v-.943a.75.75 0 0 1 1.5 0v.943A4.43 4.43 0 0 1 11.32 22H6.433A4.44 4.44 0 0 1 2 17.565V6.436A4.44 4.44 0 0 1 6.433 2zm8.08 6.554 2.928 2.915q.04.039.071.081l-.07-.081a.74.74 0 0 1 .22.531l-.005.062-.002.04v.005l.007-.107a.75.75 0 0 1-.227.538l-2.922 2.909a.747.747 0 0 1-1.06-.002.75.75 0 0 1 .002-1.06l1.64-1.635H9.746a.75.75 0 0 1 0-1.5h10.226L18.33 9.616a.749.749 0 1 1 1.058-1.062"
      />
    </G>
  </Svg>
);
export default IconlystLogoutOutline;
