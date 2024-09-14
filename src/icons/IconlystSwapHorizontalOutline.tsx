import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapHorizontalOutline = ({
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
      d="M14.492 4.392a.75.75 0 0 1 1.047.168l3.122 4.313a.75.75 0 0 1-.607 1.19H5.946a.75.75 0 0 1 0-1.5h10.639L14.324 5.44a.75.75 0 0 1 .168-1.048m-9.214 9.954a.75.75 0 0 1 .668-.409h12.108a.75.75 0 0 1 0 1.5H7.415l2.26 3.123a.75.75 0 0 1-1.214.88l-3.122-4.313a.75.75 0 0 1-.06-.781"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapHorizontalOutline;
