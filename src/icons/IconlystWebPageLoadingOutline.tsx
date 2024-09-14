import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageLoadingOutline = ({
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
      d="M4.232 3.861C5.196 2.828 6.567 2.25 8.185 2.25h8.218c1.622 0 2.993.577 3.956 1.611.957 1.028 1.453 2.447 1.453 4.036v4.9a.75.75 0 0 1-1.5 0v-2.722H4.275v5.565c0 1.28.397 2.31 1.052 3.014.649.697 1.607 1.133 2.858 1.133H9.89a.75.75 0 0 1 0 1.5H8.185c-1.622 0-2.994-.578-3.956-1.611-.957-1.028-1.454-2.447-1.454-4.036V7.897c0-1.59.5-3.008 1.457-4.036m.043 4.714h16.037v-.678c0-1.28-.396-2.31-1.051-3.013-.649-.698-1.607-1.134-2.858-1.134H8.185c-1.247 0-2.205.436-2.855 1.134-.656.704-1.055 1.734-1.055 3.013zM5.98 6.459a.75.75 0 0 1 .75-.75h.054a.75.75 0 1 1 0 1.5H6.73a.75.75 0 0 1-.75-.75m2.424 0a.75.75 0 0 1 .75-.75h.054a.75.75 0 1 1 0 1.5h-.054a.75.75 0 0 1-.75-.75m2.421 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m5.7 8.405a2.68 2.68 0 0 0-1.782.673.75.75 0 0 1-.993-1.124 4.193 4.193 0 0 1 6.967 3.144.75.75 0 0 1-1.5 0 2.693 2.693 0 0 0-2.693-2.693m-3.445 1.943a.75.75 0 0 1 .75.75 2.693 2.693 0 0 0 4.474 2.02.75.75 0 0 1 .993 1.124 4.193 4.193 0 0 1-6.967-3.144.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageLoadingOutline;
