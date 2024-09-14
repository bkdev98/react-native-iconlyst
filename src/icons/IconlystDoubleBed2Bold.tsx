import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBed2Bold = ({
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
      d="M8.182 7.93h1.98a.749.749 0 1 1 0 1.5h-1.98a.749.749 0 1 1 0-1.5m6 0h1.98a.749.749 0 1 1 0 1.5h-1.98a.749.749 0 1 1 0-1.5m-9.37 2.68h14.84c.27 0 .5-.23.5-.5V6.89c0-.77 0-1.16-.13-1.52-.23-.63-.73-1.13-1.35-1.35-.37-.14-.76-.14-1.54-.14h-9.8c-.78 0-1.17 0-1.53.14-.63.22-1.13.71-1.36 1.35-.13.36-.13.75-.13 1.52v3.22c0 .27.22.5.5.5M21.842 13.175a2.39 2.39 0 0 0-1.427-1.427c-.381-.13-.774-.13-1.488-.13H5.534c-.714 0-1.108 0-1.512.139A2.38 2.38 0 0 0 2.62 13.17c-.14.384-.14.779-.14 1.497v4.7a.75.75 0 0 0 1.5 0v-.29c0-.11.09-.2.2-.2h16.1c.11 0 .2.09.2.2v.29a.75.75 0 0 0 1.5 0v-4.7c0-.718 0-1.113-.139-1.493"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleBed2Bold;
