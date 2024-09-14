import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseEditLight = ({
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
      stroke={props.color}
      strokeWidth={1.5}
      d="M10.998 8.83c4.047 0 7.327-1.323 7.327-2.955s-3.28-2.956-7.327-2.956-7.327 1.323-7.327 2.956c0 1.632 3.28 2.956 7.327 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.67 11.606v5.834s0 2.917 7.37 2.917M18.325 11.605V5.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.67 5.77v5.835s0 2.917 7.37 2.917"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.888 20.938-.782.131a.878.878 0 0 1-1.018-.96l.088-.807c.043-.39.205-.757.467-1.05l3.103-3.414a1.074 1.074 0 0 1 1.518-.058l.72.666c.436.403.462 1.083.059 1.519l-3.065 3.373c-.285.318-.67.53-1.09.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseEditLight;
