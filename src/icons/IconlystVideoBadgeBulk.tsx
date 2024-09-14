import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBadgeBulk = ({
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
      d="M17.895 2.86H7.774a4.444 4.444 0 0 0-4.44 4.438v6.91a4.445 4.445 0 0 0 4.44 4.44h1.068c.434 0 .862.176 1.171.483l1.422 1.43.003.003c.385.38.89.57 1.395.57.507 0 1.014-.19 1.401-.573l1.419-1.427a1.69 1.69 0 0 1 1.174-.486h1.068a4.444 4.444 0 0 0 4.439-4.44v-6.91a4.444 4.444 0 0 0-4.439-4.439"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.821 12.384-.005.005a10.2 10.2 0 0 1-3.004 1.878 2.4 2.4 0 0 1-.884.18c-.346 0-.675-.087-.968-.259-.51-.3-.85-.846-.932-1.493a18.3 18.3 0 0 1 0-3.897c.087-.67.426-1.2.955-1.505.54-.31 1.211-.338 1.841-.074 1.166.483 2.148 1.103 3 1.891.487.437.762 1.015.766 1.62.003.61-.269 1.196-.769 1.654M11.955 8.54q.138 0 .292.063c1.001.416 1.838.941 2.567 1.616.125.113.275.294.276.52.001.23-.151.42-.28.538a8.7 8.7 0 0 1-2.554 1.597c-.216.086-.409.094-.534.021-.147-.086-.192-.28-.204-.37a16.8 16.8 0 0 1-.002-3.546c.017-.129.068-.3.215-.385a.45.45 0 0 1 .224-.054"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoBadgeBulk;
