import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaypalBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.813 12.998h2.475a5 5 0 1 0 0-9.998H9.171a2.42 2.42 0 0 0-2.39 2.042L4.76 17.845a1 1 0 0 0 .988 1.156h2c.649 0 1.2-.472 1.302-1.113l.617-3.912a1.16 1.16 0 0 1 1.145-.978"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.047 17.898-.428 2.522a.5.5 0 0 0 .494.577l2.713.002a1 1 0 0 0 .989-.844l.575-3.65h2.608a5 5 0 0 0 4.938-4.221 4.99 4.99 0 0 0-2.471-5.122l-.266-.146"
    />
  </Svg>
);
export default IconlystPaypalBroken;
