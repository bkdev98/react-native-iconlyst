import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThermometerBold = ({
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
      d="M11.334 15.271a.75.75 0 1 1 1.059-1.062l2.001 1.993 1.663-1.664-1.999-1.992a.749.749 0 1 1 1.058-1.062l2.001 1.993 1.664-1.665-1.965-1.957a.75.75 0 1 1 1.059-1.063l1.966 1.959.294-.293A4.62 4.62 0 0 0 21.5 7.165a4.62 4.62 0 0 0-1.363-3.294A4.62 4.62 0 0 0 16.841 2.5a4.62 4.62 0 0 0-3.295 1.37l-7.578 7.573a2.6 2.6 0 0 0-.74 1.532l-.226 1.891a1.6 1.6 0 0 1-.456.944l-1.289 1.289a2.56 2.56 0 0 0-.757 1.824A2.577 2.577 0 0 0 5.08 21.5c.661 0 1.321-.251 1.824-.753l1.288-1.289c.252-.249.589-.412.943-.458l1.892-.219.007-.001a2.67 2.67 0 0 0 1.527-.743l.773-.774z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThermometerBold;
