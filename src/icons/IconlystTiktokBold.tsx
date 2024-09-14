import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTiktokBold = ({
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
      d="M15.799 10.979a3.7 3.7 0 0 1-2.288-.776v4.587a3.034 3.034 0 0 1-3.03 3.029c-1.67 0-3.03-1.36-3.03-3.03a3.035 3.035 0 0 1 3.03-3.03.75.75 0 0 1 0 1.5c-.844 0-1.53.687-1.53 1.53s.686 1.53 1.53 1.53 1.53-.687 1.53-1.53V7.95a.75.75 0 0 1 1.462-.236c.006.018.605 1.766 2.326 1.766a.75.75 0 0 1 0 1.5M12 3.009c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTiktokBold;
