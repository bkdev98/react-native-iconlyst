import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchQuestionOutline = ({
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
      d="M11.882 3.75a7.668 7.668 0 1 0 5.183 13.318l.015-.014.057-.052A7.667 7.667 0 0 0 11.883 3.75m6.788 13.83a9.14 9.14 0 0 0 2.38-6.162 9.167 9.167 0 0 0-9.168-9.168 9.167 9.167 0 0 0-9.167 9.168 9.168 9.168 0 0 0 14.858 7.188l2.933 2.925a.75.75 0 0 0 1.06-1.062zM9.158 9.789a2.897 2.897 0 0 1 2.904-2.904c1.6 0 2.903 1.294 2.903 2.904 0 1.14-.654 1.942-1.494 2.407l-.15.085c-.238.134-.412.232-.555.36-.136.123-.177.216-.175.345a.75.75 0 0 1-1.5.02c-.01-.675.31-1.153.672-1.48.279-.25.625-.444.86-.574l.108-.061.01-.006c.483-.266.724-.624.724-1.096 0-.779-.63-1.404-1.403-1.404-.78 0-1.404.623-1.404 1.404a.75.75 0 0 1-1.5 0m2.684 4.655a.75.75 0 0 1 .75.75v.007a.75.75 0 1 1-1.5 0v-.007a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchQuestionOutline;
