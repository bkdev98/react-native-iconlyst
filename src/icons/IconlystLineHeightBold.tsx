import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineHeightBold = ({
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
      d="M11.435 12.06 12 10.768l.565 1.293zm3.576.605L12.917 7.87a1 1 0 0 0-1.833 0L8.99 12.662q-.005.008-.008.018l-1.158 2.65a1 1 0 1 0 1.833.8l.904-2.07h2.877l.904 2.07a1 1 0 1 0 1.832-.8l-1.158-2.653zM19.012 19H4.988a1 1 0 1 0 0 2h14.024a1 1 0 1 0 0-2M4.988 5h14.024a1 1 0 1 0 0-2H4.988a1 1 0 1 0 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLineHeightBold;
