import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCovid19CoronaBroken = ({
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
      d="M11.855 6.028c.572-.11 1.106-1.464.087-2.266M11.856 18.221c.748.105.957 1.556-.11 2.017M16.644 8.185c2.583 0 3.181-1.855 2.464-3.407M7.55 16.467c0 1.249-.953 3.266-3.514 2.257M21 12.12c-.909-.84-2.515-.606-3.049 0-.353.408-1.333 1.144-2.428.827M8.675 12.19c.792.158 1.798 1.433 1.524 2.64M5.758 12.122c-.91-.606-1.232.706-2.758.168M16.166 16.44c1.349.103 2.786 1.317 2.204 3.58M7.542 7.813c-2.727 0-.731-2.531-2.915-2.702"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.952 12.125a6.097 6.097 0 1 1-12.193 0 6.097 6.097 0 0 1 12.193 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.31 10.007h.027m.481-.095a.481.481 0 1 0-.962 0 .481.481 0 0 0 .962 0M13.252 14.775h.004m.07-.014a.071.071 0 1 0-.142 0 .071.071 0 0 0 .143 0"
    />
  </Svg>
);
export default IconlystCovid19CoronaBroken;
