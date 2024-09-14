import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPresentationChartOutline = ({
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
      d="M12.5 6.395a.75.75 0 0 1 .75.75v5.31a.75.75 0 0 1-1.5 0v-5.31a.75.75 0 0 1 .75-.75m-4.144 1.77a.75.75 0 0 1 .75.75v3.54a.75.75 0 0 1-1.5 0v-3.54a.75.75 0 0 1 .75-.75m8.288.79a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 1-1.5 0v-2.75a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.757 6.995A4.626 4.626 0 0 1 7.383 2.37h10.233a4.626 4.626 0 0 1 4.627 4.626v5.61a4.626 4.626 0 0 1-4.627 4.626H7.383a4.626 4.626 0 0 1-4.626-4.626zM7.383 3.87a3.126 3.126 0 0 0-3.126 3.126v5.61c0 1.726 1.4 3.126 3.126 3.126h10.233c1.727 0 3.127-1.4 3.127-3.126v-5.61c0-1.727-1.4-3.126-3.127-3.126z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.02 15.905a.75.75 0 0 1 .96 0l5.566 4.638a.75.75 0 1 1-.96 1.152l-4.336-3.613v3.037a.75.75 0 1 1-1.5 0v-3.037l-4.336 3.613a.75.75 0 1 1-.96-1.152z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPresentationChartOutline;
