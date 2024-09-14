import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVerticalMirrorBold = ({
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
      d="M4.59 8.663a1.43 1.43 0 0 0-1.52-.173 1.43 1.43 0 0 0-.816 1.296v5.447a1.446 1.446 0 0 0 1.44 1.44c.32 0 .635-.108.897-.318l3.396-2.724a1.43 1.43 0 0 0 .538-1.122 1.43 1.43 0 0 0-.538-1.121zM12.002 13.426a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75M12.002 18.758a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75M12.002 8.092a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75M12.002 2.759a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75M20.93 8.49a1.43 1.43 0 0 0-1.521.173l-3.396 2.724a1.43 1.43 0 0 0-.54 1.122c0 .438.198.847.54 1.121l3.397 2.725a1.43 1.43 0 0 0 1.52.174c.504-.242.816-.739.816-1.297V9.785c0-.558-.312-1.054-.815-1.296"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVerticalMirrorBold;
