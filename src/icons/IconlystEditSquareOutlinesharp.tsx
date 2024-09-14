import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.183 7.33 4.861 4.86L7.131 23.105 2.274 23.1l-.005-4.857zM3.77 18.863l.002 2.737 2.738.003 9.413-9.413-2.74-2.74z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.183 7.33 4.861 4.86L7.131 23.105 2.274 23.1l-.005-4.857zM3.77 18.863l.002 2.737 2.738.003 9.413-9.413-2.74-2.74z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.743 15.658 9.696 11.61l1.061-1.06 4.047 4.046z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.23 23.104H12.195v-1.5h8.536v-17H3.77V13.3h-1.5V3.104h19.96z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEditSquareOutlinesharp;
