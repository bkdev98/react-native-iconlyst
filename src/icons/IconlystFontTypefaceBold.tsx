import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFontTypefaceBold = ({
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
      d="M9.6 12.99 12 7.498l2.4 5.492zm9.433 5.609-2.18-4.989-.008-.019-3.928-8.992a1 1 0 0 0-1.833 0l-3.928 8.992-.01.019-2.178 4.989A1 1 0 1 0 6.8 19.4l1.926-4.41h6.546L17.2 19.4a1 1 0 0 0 1.317.516 1 1 0 0 0 .516-1.317"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFontTypefaceBold;
