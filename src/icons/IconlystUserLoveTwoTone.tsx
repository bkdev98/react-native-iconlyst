import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoveTwoTone = ({
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
      d="M14.409 17.418c-.295-.922.05-1.973 1.016-2.284a1.65 1.65 0 0 1 1.492.25 1.66 1.66 0 0 1 1.49-.25c.965.31 1.313 1.362 1.018 2.284C18.966 18.877 16.917 20 16.917 20s-2.033-1.108-2.508-2.583"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.773 19.573c0-2.052 1.62-4.608 6.287-4.608"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.079 8.016a4.016 4.016 0 1 1-8.033-.001 4.016 4.016 0 0 1 8.033 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserLoveTwoTone;
