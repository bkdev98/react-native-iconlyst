import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBedBold = ({
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
      d="M4.62 10.643H6.84c.11 0 .2-.09.198-.2-.002-.266.001-.539.089-.79.154-.427.483-.756.905-.907.247-.089.496-.089.948-.089h.62c.453 0 .703 0 .949.09.42.15.75.48.902.9.088.254.092.527.09.796 0 .11.088.2.199.2h.6c.11 0 .2-.09.198-.2-.002-.266.001-.539.089-.79.154-.427.483-.756.905-.907.247-.089.496-.089.948-.089h.62c.453 0 .703 0 .949.09.42.15.75.48.902.9.088.254.092.527.09.796 0 .11.088.2.199.2h2.219a.5.5 0 0 0 .5-.5V6.93c0-.77 0-1.158-.132-1.526a2.23 2.23 0 0 0-1.346-1.347c-.374-.142-.763-.142-1.54-.142h-9.8c-.777 0-1.166 0-1.53.14a2.23 2.23 0 0 0-1.356 1.35c-.133.366-.133.754-.133 1.525v3.214a.5.5 0 0 0 .5.5M21.65 13.145a2.39 2.39 0 0 0-1.427-1.428c-.38-.13-.775-.13-1.489-.13H5.342c-.714 0-1.107 0-1.51.14a2.38 2.38 0 0 0-1.403 1.413c-.14.384-.14.78-.14 1.497v4.7a.75.75 0 0 0 1.5 0v-.29c0-.11.09-.2.2-.2h16.1c.11 0 .2.09.2.2v.29a.75.75 0 0 0 1.5 0v-4.7c0-.718 0-1.113-.139-1.492"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleBedBold;
