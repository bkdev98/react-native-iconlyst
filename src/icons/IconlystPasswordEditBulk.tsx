import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordEditBulk = ({
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
      d="M16.11 13.364c.013-.014.03-.023.044-.037l.744-.811a3.1 3.1 0 0 1 2.17-1.003 3.3 3.3 0 0 1 1.6.385c.226.122.536-.027.536-.283V8.788c0-3.308-2.123-5.53-5.283-5.53H7.486c-3.159 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53h4.671a.316.316 0 0 0 .304-.25 3.86 3.86 0 0 1 .895-1.74l2.662-2.903c.032-.036.057-.076.091-.111"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.8 11.747a1.01 1.01 0 0 1-1.012-1.01 1.012 1.012 0 0 1 2.022 0c0 .557-.454 1.01-1.01 1.01M10.694 10.737a1.011 1.011 0 1 0 2.022-.002 1.011 1.011 0 0 0-2.022.002M15.61 9.727c-.557 0-1.01.453-1.01 1.01s.453 1.01 1.01 1.01a1.011 1.011 0 0 0 0-2.02"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.455 13.258.743.687c.362.33.575.786.596 1.285a1.85 1.85 0 0 1-.495 1.347l-3.488 3.806a2.66 2.66 0 0 1-1.561.853l-.811.13a1.64 1.64 0 0 1-1.406-.427 1.64 1.64 0 0 1-.51-1.383l.091-.83a2.66 2.66 0 0 1 .671-1.512l2.676-2.918q.009-.011.014-.022.006-.016.019-.028.007-.007.016-.01l.016-.01.794-.867a1.863 1.863 0 0 1 2.635-.101m-4.442 6.498a1.17 1.17 0 0 0 .685-.379l2.088-2.279-1.231-1.23-2.16 2.355a1.17 1.17 0 0 0-.29.664l-.091.832a.155.155 0 0 0 .181.168zm3.176-5.496h-.013a.37.37 0 0 0-.254.117l-.352.384 1.231 1.231.396-.432a.37.37 0 0 0 .099-.267.35.35 0 0 0-.111-.242l-.75-.694a.36.36 0 0 0-.246-.097"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordEditBulk;
