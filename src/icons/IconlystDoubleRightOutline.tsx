import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleRightOutline = ({
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
      d="M12.435 7.144a.75.75 0 0 0 .072 1.058L16.859 12 12.507 15.8a.75.75 0 0 0 .986 1.13l5-4.364a.75.75 0 0 0 0-1.13l-5-4.363a.75.75 0 0 0-1.058.072M5.69 6.954a.75.75 0 0 0-.44.683v8.727a.75.75 0 0 0 1.243.565l5-4.364a.75.75 0 0 0 0-1.13l-5-4.363a.75.75 0 0 0-.803-.118m1.06 2.333L9.86 12l-3.11 2.714z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleRightOutline;
