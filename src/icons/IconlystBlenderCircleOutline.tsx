import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlenderCircleOutline = ({
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
      d="M14.02 10.102c-1.828 0-3.23 1.381-3.23 2.99 0 1.607 1.402 2.99 3.23 2.99s3.23-1.383 3.23-2.99c0-1.609-1.402-2.99-3.23-2.99m-4.73 2.99c0-2.524 2.162-4.49 4.73-4.49s4.73 1.966 4.73 4.49c0 2.522-2.162 4.49-4.73 4.49s-4.73-1.968-4.73-4.49"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.02 12.504c-.417 0-.674.307-.674.588 0 .282.257.589.674.589s.674-.307.674-.589-.257-.588-.674-.588m-2.174.588c0-1.196 1.018-2.088 2.174-2.088s2.174.892 2.174 2.088-1.018 2.089-2.174 2.089-2.174-.892-2.174-2.089M11.881 6.72a.75.75 0 0 1 1.05-.153l4.101 3.06a.75.75 0 1 1-.897 1.202l-4.101-3.06a.75.75 0 0 1-.153-1.05M11.112 10.817a.75.75 0 0 1-.118 1.054l-4.526 3.612a.75.75 0 1 1-.936-1.172l4.526-3.612a.75.75 0 0 1 1.054.118M6.974 9.569a.75.75 0 0 1 .767-.733l4.632.107a.75.75 0 0 1-.034 1.5l-4.633-.107a.75.75 0 0 1-.732-.767"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 4.234a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBlenderCircleOutline;
