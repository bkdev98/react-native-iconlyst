import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftBold = ({
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
      d="M18 19.25a1 1 0 0 1-.707-.293l-6-6a1 1 0 0 1 0-1.414l6-6a.999.999 0 1 1 1.414 1.414l-5.293 5.293 5.293 5.293A.999.999 0 0 1 18 19.25M6 19.25a1 1 0 0 1-1-1v-12a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftBold;
