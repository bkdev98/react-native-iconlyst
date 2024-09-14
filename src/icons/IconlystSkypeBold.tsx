import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSkypeBold = ({
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
      d="M15.417 14.531v.022c-.021 1.345-1.048 2.688-3.314 2.688-1.535 0-2.858-.855-3.217-2.079a.75.75 0 0 1 1.44-.422c.167.57.931 1.001 1.777 1.001 1.131 0 1.808-.456 1.814-1.22-.004-.512-.292-.95-.675-1.022L10.68 13c-1.094-.207-1.891-1.262-1.891-2.508 0-1.359 1.025-2.73 3.314-2.73 1.535 0 2.857.855 3.216 2.08a.75.75 0 1 1-1.44.421c-.167-.57-.931-1-1.776-1-.545 0-1.814.12-1.814 1.23 0 .515.29.96.674 1.032l2.562.501c1.082.204 1.875 1.238 1.892 2.466v.04m5.444-.639a9 9 0 0 0-.38-4.29 8.96 8.96 0 0 0-4.22-4.979c-1.69-.928-3.687-1.27-5.638-.974-1.814-.97-4.113-.826-5.77.371a5.5 5.5 0 0 0-2.23 3.355 5.6 5.6 0 0 0 .515 3.756 9.04 9.04 0 0 0 .464 4.525 9.05 9.05 0 0 0 4.353 4.861 9.04 9.04 0 0 0 5.422.856 5.5 5.5 0 0 0 2.585.633c1.075 0 2.147-.303 3.038-.905a5.48 5.48 0 0 0 2.391-3.529 5.6 5.6 0 0 0-.53-3.68"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSkypeBold;
