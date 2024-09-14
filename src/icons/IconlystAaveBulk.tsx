import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAaveBulk = ({
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
      d="M12.5 2.5C7.261 2.5 3 6.761 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.248 15.777a.75.75 0 0 0 1.371-.609l-3.435-7.73a.75.75 0 0 0-1.371 0l-1.709 3.845H9.062a.75.75 0 0 0 0 1.5h.375l-1.06 2.385a.75.75 0 1 0 1.371.61l1.331-2.995h1.199a.75.75 0 0 0 0-1.5h-.532l.753-1.694z"
    />
  </Svg>
);
export default IconlystAaveBulk;
