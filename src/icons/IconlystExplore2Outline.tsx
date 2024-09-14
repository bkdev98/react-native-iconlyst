import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExplore2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.998a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25c0-5.384 4.365-9.75 9.75-9.75S22 6.864 22 12.248a9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.909 8.59a.75.75 0 0 1 .185.754l-1.492 4.766a.75.75 0 0 1-.491.492l-4.766 1.491a.75.75 0 0 1-.94-.94l1.492-4.765a.75.75 0 0 1 .492-.492l4.765-1.492a.75.75 0 0 1 .755.186m-4.698 2.62-.946 3.023 3.023-.946.946-3.023z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExplore2Outline;
