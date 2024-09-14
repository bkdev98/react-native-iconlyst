import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnDownCircleBold = ({
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
      d="M17.244 13.443a.75.75 0 0 1-1.5 0v-1.587a2.593 2.593 0 0 0-2.59-2.59 2.59 2.59 0 0 0-2.59 2.59v2.318l1.029-1.028a.749.749 0 1 1 1.06 1.06l-2.305 2.305a.745.745 0 0 1-1.068.002l-2.305-2.306a.75.75 0 0 1 1.061-1.062l1.028 1.028v-2.317a4.094 4.094 0 0 1 4.09-4.09 4.095 4.095 0 0 1 4.09 4.09zM12 2.75c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnDownCircleBold;
