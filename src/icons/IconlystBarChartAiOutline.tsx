import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartAiOutline = ({
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
      d="M7.334 8.993a.75.75 0 0 1 .75.75v7.323a.75.75 0 0 1-1.5 0V9.743a.75.75 0 0 1 .75-.75m8.331 3.423a.75.75 0 0 1 .75.75v3.9a.75.75 0 0 1-1.5 0v-3.9a.75.75 0 0 1 .75-.75m-4.131 1.872a.75.75 0 0 1 .75.75v2.028a.75.75 0 1 1-1.5 0v-2.028a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.324 4.397C4.308 3.341 5.71 2.75 7.366 2.75h4.435a.75.75 0 1 1 0 1.5H7.366c-1.284 0-2.273.45-2.945 1.17-.678.727-1.088 1.79-1.088 3.107v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.169 2.948 1.169H15.8c1.29 0 2.278-.45 2.948-1.17.676-.725 1.085-1.788 1.085-3.106v-2.947a.75.75 0 1 1 1.5 0v2.947c0 1.627-.508 3.078-1.487 4.129-.984 1.056-2.387 1.647-4.046 1.647H7.366c-1.66 0-3.062-.59-4.046-1.647-.978-1.05-1.487-2.501-1.487-4.13V8.528c0-1.628.511-3.08 1.49-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.987 9.45a.75.75 0 0 0 .704-.49l.1-.274a3.01 3.01 0 0 1 1.78-1.782l.273-.101a.75.75 0 0 0 0-1.407l-.273-.1a3.01 3.01 0 0 1-1.78-1.782l-.1-.274a.75.75 0 0 0-1.407 0l-.101.274a3.01 3.01 0 0 1-1.779 1.781l-.273.101a.75.75 0 0 0 0 1.407l.273.101a3.01 3.01 0 0 1 1.779 1.782l.1.273a.75.75 0 0 0 .704.49M17.04 6.1c.361-.268.681-.588.948-.95.268.362.587.682.949.95a4.5 4.5 0 0 0-.949.95 4.5 4.5 0 0 0-.948-.95M12.677 10.691a.75.75 0 0 0 .717-.532 1.02 1.02 0 0 1 .678-.679.75.75 0 0 0 0-1.435 1.02 1.02 0 0 1-.678-.679.75.75 0 0 0-1.435 0 1.02 1.02 0 0 1-.678.68.75.75 0 0 0 0 1.434c.325.099.58.353.678.68a.75.75 0 0 0 .718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartAiOutline;
