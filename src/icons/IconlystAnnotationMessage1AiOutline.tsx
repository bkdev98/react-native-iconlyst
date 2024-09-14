import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnnotationMessage1AiOutline = ({
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
      d="M2.25 6.351A3.75 3.75 0 0 1 6 2.601h12a3.75 3.75 0 0 1 3.75 3.75v8.784a3.75 3.75 0 0 1-3.75 3.75h-2.162a.75.75 0 0 0-.53.22L13.59 20.82a2.25 2.25 0 0 1-3.182 0l-1.717-1.717a.75.75 0 0 0-.53-.22H6a3.75 3.75 0 0 1-3.75-3.75zM6 4.101a2.25 2.25 0 0 0-2.25 2.25v8.784A2.25 2.25 0 0 0 6 17.385h2.162a2.25 2.25 0 0 1 1.591.659l1.717 1.716a.75.75 0 0 0 1.06 0l1.717-1.716a2.25 2.25 0 0 1 1.591-.66H18a2.25 2.25 0 0 0 2.25-2.25V6.352A2.25 2.25 0 0 0 18 4.101z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.46 8.633a.75.75 0 0 1 .703.49l.101.274a3.01 3.01 0 0 0 1.779 1.781l.273.101a.75.75 0 0 1 0 1.407l-.273.101a3.01 3.01 0 0 0-1.779 1.782l-.101.273a.75.75 0 0 1-1.407 0l-.101-.273a3.01 3.01 0 0 0-1.779-1.782l-.273-.1a.75.75 0 0 1 0-1.407l.273-.102a3.01 3.01 0 0 0 1.779-1.781l.101-.274a.75.75 0 0 1 .704-.49m-.95 3.35c.363.267.682.587.95.95.267-.363.586-.683.948-.95a4.5 4.5 0 0 1-.948-.95 4.5 4.5 0 0 1-.95.95M8.149 7.391a.75.75 0 0 1 .717.532c.1.326.354.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 .718-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAnnotationMessage1AiOutline;
