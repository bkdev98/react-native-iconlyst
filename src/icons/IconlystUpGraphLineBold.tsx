import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpGraphLineBold = ({
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
      d="M21.5 20H6.441c-1.07 0-1.941-.87-1.941-1.939V3a1 1 0 1 0-2 0v15.061A3.946 3.946 0 0 0 6.441 22H21.5a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.132 13.95c.3 0 .597-.134.793-.39l3.232-4.2 3.596 2.826a1.004 1.004 0 0 0 1.409-.173l3.765-4.86a1 1 0 0 0-1.582-1.225l-3.148 4.064L13.6 7.164a.998.998 0 0 0-1.41.176l-3.85 5a.999.999 0 0 0 .792 1.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpGraphLineBold;
