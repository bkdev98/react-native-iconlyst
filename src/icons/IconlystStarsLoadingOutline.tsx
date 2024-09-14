import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsLoadingOutline = ({
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
      d="M7.419 4.6a.75.75 0 0 1-.09 1.056q-.75.634-1.331 1.423a.75.75 0 0 1-1.209-.888A9.8 9.8 0 0 1 6.362 4.51a.75.75 0 0 1 1.057.09M18.767 18.624a.75.75 0 0 1-.128 1.053 9.757 9.757 0 0 1-8.15 1.835.75.75 0 0 1 .328-1.463c.777.174 1.591.24 2.425.178a8.2 8.2 0 0 0 4.472-1.73.75.75 0 0 1 1.053.127M4.042 14.893a.75.75 0 0 1 .99.383 8.27 8.27 0 0 0 2.859 3.468.75.75 0 0 1-.854 1.234A9.77 9.77 0 0 1 3.66 15.88a.75.75 0 0 1 .383-.988M4.137 8.82c.4.11.635.522.526.921a8.2 8.2 0 0 0-.275 2.78.75.75 0 0 1-1.496.112 9.7 9.7 0 0 1 .324-3.287.75.75 0 0 1 .92-.526M12.228 2.257a9.76 9.76 0 0 1 10.126 9.378 9.67 9.67 0 0 1-1.457 5.484.75.75 0 1 1-1.275-.79 8.17 8.17 0 0 0 1.233-4.636 8.26 8.26 0 0 0-8.57-7.937.75.75 0 0 1-.057-1.499"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.614 6.451a.75.75 0 0 1 .714.519 6.72 6.72 0 0 0 4.316 4.317.75.75 0 0 1 0 1.426 6.71 6.71 0 0 0-4.316 4.317.75.75 0 0 1-1.427 0 6.72 6.72 0 0 0-4.317-4.317.75.75 0 0 1 0-1.426A6.72 6.72 0 0 0 11.9 6.97a.75.75 0 0 1 .713-.519M9.644 12a8.2 8.2 0 0 1 2.97 2.97 8.2 8.2 0 0 1 2.97-2.97 8.2 8.2 0 0 1-2.97-2.97A8.2 8.2 0 0 1 9.644 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarsLoadingOutline;
