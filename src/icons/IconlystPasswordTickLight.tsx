import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordTickLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.24V8.054c0-2.878-1.793-4.911-4.673-4.911h-8.24c-2.872 0-4.673 2.033-4.673 4.91v3.962c0 2.878 1.792 4.91 4.673 4.91h2.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.586 20.774a3.83 3.83 0 1 1-.001-7.659 3.83 3.83 0 0 1 0 7.66"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.288 16.092-2.127 2.127-1.276-1.276M12.207 9.995V9.93zm-.26-.013a.261.261 0 0 1 .522 0 .26.26 0 0 1-.522 0M16.11 9.995V9.93zm-.258-.013a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0M8.3 9.995V9.93zm-.259-.013a.261.261 0 0 1 .522 0 .26.26 0 0 1-.261.26.26.26 0 0 1-.261-.26"
    />
  </Svg>
);
export default IconlystPasswordTickLight;
