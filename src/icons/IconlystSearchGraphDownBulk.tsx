import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGraphDownBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.619 11.325a.99.99 0 0 0-1.164.583l-1.331-2.315a1 1 0 0 0-1.367-.37l-1.434.83-.954-1.661a1 1 0 0 0-1.734.996l1.452 2.53c.133.23.35.399.608.469.256.067.529.032.759-.1l1.436-.83.832 1.449a.99.99 0 0 0-1.091.713 1 1 0 0 0 .704 1.227l2.176.589h.006c.057.016.116.02.175.025.027.002.053.01.08.01h.002a.994.994 0 0 0 .966-.748l.585-2.171a1 1 0 0 0-.706-1.226"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.214 11.42C4.214 7.328 7.542 4 11.632 4s7.417 3.328 7.417 7.42-3.327 7.42-7.417 7.42-7.418-3.328-7.418-7.42m17.279 8.872-2.735-2.731a9.37 9.37 0 0 0 2.29-6.141c0-5.194-4.223-9.42-9.416-9.42s-9.418 4.226-9.418 9.42 4.225 9.42 9.418 9.42a9.36 9.36 0 0 0 5.664-1.912l2.784 2.78a1 1 0 0 0 1.414-.001 1 1 0 0 0-.001-1.415"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchGraphDownBulk;
