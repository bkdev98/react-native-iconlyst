import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYahooCircleOutline = ({
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
      d="M12.548 8.562a.75.75 0 0 1 .39.986l-3.25 7.5a.75.75 0 1 1-1.376-.596l3.25-7.5a.75.75 0 0 1 .986-.39M16.468 7.272a.75.75 0 0 1 .393.984l-1.5 3.5a.75.75 0 1 1-1.378-.59l1.5-3.5a.75.75 0 0 1 .985-.394"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.212 8.558a.75.75 0 0 1 .98.404l2.329 5.588a.75.75 0 1 1-1.385.577L6.808 9.538a.75.75 0 0 1 .404-.98M12.804 13.954a.868.868 0 1 1 1.736 0 .868.868 0 0 1-1.736 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystYahooCircleOutline;
