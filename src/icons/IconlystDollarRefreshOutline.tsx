import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarRefreshOutline = ({
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
      d="M13.635 4.144a8.012 8.012 0 0 0-7.181 13.45.75.75 0 1 1-1.079 1.042 9.51 9.51 0 0 1 .091-13.307l.532.528-.532-.528A9.5 9.5 0 0 1 13.9 2.667a.75.75 0 1 1-.265 1.477M18.064 5.47a.75.75 0 0 1 1.06.019A9.511 9.511 0 0 1 10.6 21.457a.75.75 0 1 1 .265-1.476 8.012 8.012 0 0 0 7.181-13.45.75.75 0 0 1 .018-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.293 10.663c0-1.19.964-2.155 2.154-2.155h2.61a.75.75 0 0 1 0 1.5h-2.61a.654.654 0 0 0 0 1.31h1.606a2.155 2.155 0 0 1 0 4.31h-2.61a.75.75 0 0 1 0-1.5h2.61a.656.656 0 0 0 0-1.31h-1.606a2.155 2.155 0 0 1-2.154-2.155M6.61 15.034a.75.75 0 0 1 .588.882l-.53 2.668a.75.75 0 0 1-.882.59l-2.682-.534a.75.75 0 0 1 .292-1.471l1.947.387.384-1.933a.75.75 0 0 1 .882-.589M18.15 5.062a.75.75 0 0 1 .564-.112l2.682.533a.75.75 0 0 1-.292 1.471l-1.947-.387-.384 1.933a.75.75 0 0 1-1.471-.293l.53-2.668a.75.75 0 0 1 .319-.477"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 7.32a.75.75 0 0 1 .75.75v1.19a.75.75 0 0 1-1.5 0V8.07a.75.75 0 0 1 .75-.75m0 6.805a.75.75 0 0 1 .75.75v1.18a.75.75 0 0 1-1.5 0v-1.18a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarRefreshOutline;
