import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTempleBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.078 20.25a.3.3 0 0 0 .3.3H7.85a.3.3 0 0 0 .3-.3v-7.4a.3.3 0 0 0-.3-.3H6.378a.3.3 0 0 0-.3.3zm7.142 0a.3.3 0 0 0 .3.3h1.471a.3.3 0 0 0 .3-.3v-7.4a.3.3 0 0 0-.3-.3h-1.47a.3.3 0 0 0-.3.3zm-3.57 0a.3.3 0 0 0 .3.3h1.47a.3.3 0 0 0 .3-.3v-7.4a.3.3 0 0 0-.3-.3H9.95a.3.3 0 0 0-.3.3zm7.142 0a.3.3 0 0 0 .3.3h1.47a.3.3 0 0 0 .3-.3v-7.4a.3.3 0 0 0-.3-.3h-1.47a.3.3 0 0 0-.3.3zm4.16.3h-.29a.3.3 0 0 1-.3-.3v-7.4a.3.3 0 0 1 .3-.3h.29a.75.75 0 0 0 0-1.5h-.606a.31.31 0 0 1-.303-.27 7.655 7.655 0 0 0-6.552-6.55.31.31 0 0 1-.27-.303V3.3a.75.75 0 1 0-1.5 0v.626a.31.31 0 0 1-.271.303 7.655 7.655 0 0 0-6.552 6.55.31.31 0 0 1-.304.27H3.99a.75.75 0 0 0 0 1.5h.288a.3.3 0 0 1 .3.3v7.4a.3.3 0 0 1-.3.3H3.99a.75.75 0 0 0 0 1.5h16.961a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTempleBold;
