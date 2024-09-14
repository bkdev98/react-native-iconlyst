import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesSearchBold = ({
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
      d="M11.975 9.668a2.105 2.105 0 0 0-2.098 2.108c0 1.162.94 2.108 2.098 2.108a2.106 2.106 0 0 0 2.098-2.108 2.106 2.106 0 0 0-2.098-2.108"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.004 15.966a.747.747 0 0 1-1.06-.001L13.84 14.86a3.6 3.6 0 0 1-1.867.524 3.607 3.607 0 0 1-3.598-3.608 3.607 3.607 0 0 1 3.598-3.608 3.607 3.607 0 0 1 2.958 5.66l1.073 1.077a.75.75 0 0 1 0 1.06m3.77-9.674a9.53 9.53 0 0 0-6.924-3.63 9.5 9.5 0 0 0-7.27 2.774c-2.807 2.816-3.572 7.138-1.915 10.732.147.368.683 1.315.99 1.845.091.16.081.36-.024.51-.223.314-.505.716-.723 1.046a1.374 1.374 0 0 0 1.14 2.139h1.417c2.278-.001 5.07-.002 5.8 0h.032a9.5 9.5 0 0 0 7.272-3.398c2.898-3.436 2.984-8.49.204-12.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesSearchBold;
