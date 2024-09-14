import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.614 6.453a.75.75 0 0 1 .714.519 6.72 6.72 0 0 0 4.316 4.316.75.75 0 0 1 0 1.427 6.71 6.71 0 0 0-4.316 4.317.75.75 0 0 1-1.427 0 6.71 6.71 0 0 0-4.317-4.317.75.75 0 0 1 0-1.427A6.72 6.72 0 0 0 11.9 6.972a.75.75 0 0 1 .713-.519m-2.97 5.549a8.2 8.2 0 0 1 2.97 2.97 8.2 8.2 0 0 1 2.97-2.97 8.2 8.2 0 0 1-2.97-2.97 8.2 8.2 0 0 1-2.97 2.97"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.448 6.166A8.25 8.25 0 1 0 6.78 17.834 8.25 8.25 0 0 0 18.448 6.166M5.72 5.106c3.808-3.808 9.98-3.808 13.789 0 3.807 3.807 3.807 9.98 0 13.788s-9.981 3.808-13.789 0-3.808-9.98 0-13.788"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarsCircleOutline;
