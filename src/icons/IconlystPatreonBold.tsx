import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPatreonBold = ({
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
      d="M9.1 8.389H7.621a.227.227 0 0 0-.223.23v7.78c0 .124.098.22.223.22h1.48a.22.22 0 0 0 .223-.22v-7.78a.23.23 0 0 0-.224-.23M15.148 8.389c-1.069 0-1.939.87-1.939 1.939 0 1.07.87 1.94 1.939 1.94s1.939-.87 1.939-1.94-.87-1.94-1.939-1.94"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.148 13.769a3.443 3.443 0 0 1-3.439-3.44 3.443 3.443 0 0 1 3.439-3.44 3.443 3.443 0 0 1 3.439 3.44 3.443 3.443 0 0 1-3.439 3.44m-4.324 2.63c0 .949-.774 1.72-1.724 1.72H7.621a1.723 1.723 0 0 1-1.723-1.72v-7.78c0-.954.772-1.73 1.723-1.73H9.1c.95 0 1.724.776 1.724 1.73zm5.392-13.39H7.782c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.308 2.123 5.53 5.282 5.53h8.433c3.161 0 5.285-2.222 5.285-5.53v-7.94c0-3.307-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPatreonBold;
