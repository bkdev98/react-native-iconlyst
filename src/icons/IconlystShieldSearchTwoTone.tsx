import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldSearchTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.824 13.609c0 6.113-7.324 8.33-7.324 8.33s-7.323-2.216-7.323-8.33-.267-6.592.32-7.18c.59-.588 6.043-2.49 7.003-2.49s6.413 1.897 7 2.49c.59.593.324 1.067.324 7.18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.849 14 1.464 1.46zM11.87 8.963a2.908 2.908 0 1 1 0 5.816 2.908 2.908 0 0 1 0-5.816"
    />
  </Svg>
);
export default IconlystShieldSearchTwoTone;
