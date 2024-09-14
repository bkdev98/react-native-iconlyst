import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBubbleOutline = ({
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
      d="M4.839 21.654a1.54 1.54 0 0 1-1.278-2.4c.2-.3.457-.668.658-.952a.13.13 0 0 0 .006-.139 19 19 0 0 1-.912-1.7 8.89 8.89 0 0 1 15.065-9.219.75.75 0 1 1-1.178.928 7.373 7.373 0 0 0-11.031-.669 7.47 7.47 0 0 0-1.48 8.365c.073.177.319.65.837 1.551a1.64 1.64 0 0 1-.083 1.753c-.195.275-.441.628-.634.918l1.328.063h3.438a.75.75 0 1 1 0 1.5H6.144z"
    />
    <Path
      fill={props.color}
      d="M16.098 21.653a5.93 5.93 0 1 1 5.363-3.434 9 9 0 0 1-.521.977c.113.162.243.348.35.507a1.253 1.253 0 0 1-1.033 1.95h-4.139c-.013-.004-.015 0-.02 0m-.005-10.359q-.13-.002-.257.008a4.37 4.37 0 0 0-3.216 1.688 4.49 4.49 0 0 0 .095 5.583 4.42 4.42 0 0 0 3.383 1.58c.216.016.754 0 1.412 0h2.268q-.069-.1-.133-.191a1.31 1.31 0 0 1-.067-1.408c.346-.6.482-.867.5-.927a4.48 4.48 0 0 0-.87-5.038 4.4 4.4 0 0 0-3.115-1.295"
    />
  </Svg>
);
export default IconlystMessagesBubbleOutline;
