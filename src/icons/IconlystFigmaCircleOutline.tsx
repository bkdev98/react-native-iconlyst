import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFigmaCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.277 7.582a.972.972 0 0 0 0 1.944h3.444a.972.972 0 1 0 0-1.944zm-2.472.972a2.47 2.47 0 0 1 2.472-2.472h3.444a2.472 2.472 0 0 1 0 4.944h-3.444a2.47 2.47 0 0 1-2.472-2.472"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.277 11.023a.973.973 0 0 0 0 1.945.75.75 0 1 1 0 1.5 2.471 2.471 0 1 1 0-4.945.75.75 0 1 1 0 1.5M11.998 6.082a.75.75 0 0 1 .75.75v6.889a.75.75 0 1 1-1.5 0V6.832a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.277 14.469a.972.972 0 1 0 .972.972v-.972zm-2.472.972a2.47 2.47 0 0 1 2.472-2.472h1.722a.75.75 0 0 1 .75.75v1.722a2.472 2.472 0 1 1-4.944 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.722 11.023a.973.973 0 1 0 .002 1.947.973.973 0 0 0-.002-1.947m-2.472.974a2.473 2.473 0 1 1 4.946 0 2.473 2.473 0 0 1-4.946 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFigmaCircleOutline;
