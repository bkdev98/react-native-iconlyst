import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber2Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 6.983a2.063 2.063 0 0 0-2.061 2.06 1.8 1.8 0 0 1-3.6 0 5.663 5.663 0 0 1 5.66-5.66 5.663 5.663 0 0 1 5.662 5.66c0 1.769-.736 3.096-1.696 4.115-.807.855-1.839 1.556-2.69 2.134l-.259.175c-1.21.826-2.09 1.5-2.59 2.316h5.435a1.8 1.8 0 0 1 0 3.6h-7.72a1.8 1.8 0 0 1-1.8-1.8c0-3.893 2.763-5.804 4.645-7.09l.2-.135c.935-.638 1.638-1.117 2.159-1.67.487-.516.716-.999.716-1.644A2.063 2.063 0 0 0 12.5 6.983"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber2Light;
