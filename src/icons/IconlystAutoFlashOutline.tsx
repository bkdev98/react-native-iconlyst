import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAutoFlashOutline = ({
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
      d="m7.162 4.43-3.309 8.073h3.38a1.29 1.29 0 0 1 1.247 1.623l-1.363 5.113 7.47-8.526h-3.944a1.29 1.29 0 0 1-1.2-1.764l1.925-4.52zm-1.346-.6699999999999982c.19-.5.67-.83 1.205-.83h4.665a1.29 1.29 0 0 1 1.2 1.765L10.96 9.214h4.087c1.11 0 1.702 1.306.97 2.14l-8.364 9.548c-.9 1.027-2.57.136-2.218-1.183l1.525-5.717H3.54a1.29 1.29 0 0 1-1.202-1.76zM17.46 12.988a.75.75 0 0 1 .68.434l3.443 7.397a.75.75 0 1 1-1.36.633l-1.003-2.156H15.7l-1.002 2.156a.75.75 0 1 1-1.36-.633l3.443-7.397a.75.75 0 0 1 .68-.434M16.4 17.796h2.123l-1.061-2.28z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAutoFlashOutline;
