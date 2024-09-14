import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLetterSpacingBold = ({
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
      d="M11.435 12.06 12 10.768l.565 1.293zm3.582.618-.007-.014-2.094-4.794a.999.999 0 0 0-1.832 0L8.99 12.664l-.007.014-1.158 2.653a1 1 0 0 0 .516 1.316.993.993 0 0 0 1.316-.516l.904-2.07h2.877l.905 2.07a1 1 0 1 0 1.832-.8zM4 3.99a1 1 0 0 0-1 1v14.02a1 1 0 1 0 2 0V4.99a1 1 0 0 0-1-1M20 3.99a1 1 0 0 0-1 1v14.02a1 1 0 1 0 2 0V4.99a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLetterSpacingBold;
