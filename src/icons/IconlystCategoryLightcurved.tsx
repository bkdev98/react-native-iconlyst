import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoryLightcurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 6.674a3.674 3.674 0 1 1-7.348-.001 3.674 3.674 0 0 1 7.348 0M10.347 6.674a3.674 3.674 0 1 1-7.348 0 3.674 3.674 0 0 1 7.348 0M21 17.262a3.674 3.674 0 1 1-7.347-.001 3.674 3.674 0 0 1 7.347 0M10.347 17.262a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCategoryLightcurved;
