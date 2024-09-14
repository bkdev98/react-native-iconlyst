import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBadgeBold = ({
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
      d="M12.248 8.6a.8.8 0 0 0-.292-.063.45.45 0 0 0-.224.054c-.147.085-.198.256-.215.385a16.8 16.8 0 0 0 .002 3.546c.012.09.057.284.204.37.125.073.318.065.534-.02a8.7 8.7 0 0 0 2.554-1.598c.129-.119.28-.309.28-.538-.001-.226-.151-.407-.276-.52-.73-.675-1.566-1.2-2.567-1.616"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.822 12.381-.005.005a10.2 10.2 0 0 1-3.004 1.878 2.4 2.4 0 0 1-.884.18c-.346 0-.675-.087-.968-.259-.511-.3-.85-.846-.932-1.493a18.3 18.3 0 0 1-.001-3.897c.088-.67.427-1.2.956-1.505.54-.31 1.211-.338 1.841-.074 1.166.483 2.148 1.103 3 1.891.487.437.762 1.015.766 1.62.003.61-.269 1.196-.769 1.654m2.073-9.522H7.774a4.444 4.444 0 0 0-4.44 4.44v6.91a4.445 4.445 0 0 0 4.44 4.44h1.068c.434 0 .862.175 1.171.482l1.422 1.43.003.003c.385.38.89.57 1.395.57.507 0 1.014-.19 1.401-.573l1.419-1.427a1.69 1.69 0 0 1 1.174-.486h1.068a4.444 4.444 0 0 0 4.439-4.44v-6.91a4.444 4.444 0 0 0-4.439-4.439"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoBadgeBold;
