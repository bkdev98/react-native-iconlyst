import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBananaTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.632 10.147A12.7 12.7 0 0 1 8.555 14.3c-1.355.427-1.703.851-3.106.627l-.982-.156c-1.013-.162-1.3 1.877-.324 2.033l1.178.188c1.122.179 1.507.804 2.597 1.125a9.8 9.8 0 0 0 5.545 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.632 10.147c1.175-1.461 2.174-3.266 2.497-5.126.098-.56.2-1.109.474-1.493.2-.282.35-.46.938-.522 2.052-.213 2.063 5.141 1.798 6.805-.226 1.412-.828 3.087-1.711 4.489"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.245 11.758c1.833-.924 4.105-.15 5.113 2.08 1.51 3.342-1.657 7.045-5.092 7.16a.8.8 0 0 1-.322-.055c-2.522-.984 2.542-2.874 1.522-6.773M11.672 12.799c.45-1.697-.263-3.41-2.063-2.986-1.09.257-1.605.752-2.264.819-.512.052-.546-.735-.408-1.224.978-3.475 7.688-2.96 7.688.664"
    />
  </Svg>
);
export default IconlystBananaTwoTone;
