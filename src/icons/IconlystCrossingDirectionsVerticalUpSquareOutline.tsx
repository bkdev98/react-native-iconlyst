import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsVerticalUpSquareOutline = ({
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
      d="M15.974 3.75H8.026c-1.316 0-2.38.41-3.106 1.087-.72.672-1.17 1.661-1.17 2.945v8.435c0 1.289.45 2.278 1.17 2.948.726.676 1.789 1.085 3.106 1.085h7.948c1.317 0 2.38-.409 3.106-1.085.72-.67 1.17-1.66 1.17-2.95V7.783c0-1.289-.45-2.277-1.17-2.947-.726-.676-1.789-1.085-3.106-1.085m-7.948-1.5h7.948c1.627 0 3.078.508 4.128 1.487 1.057.983 1.648 2.386 1.648 4.045v8.434c0 1.66-.59 3.063-1.648 4.047-1.05.978-2.5 1.487-4.128 1.487H8.026c-1.627 0-3.078-.509-4.128-1.487-1.057-.984-1.648-2.387-1.648-4.046V7.782c0-1.655.591-3.057 1.647-4.042 1.05-.979 2.501-1.49 4.13-1.49"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.852 9.07h1.415a.75.75 0 0 0 0-1.5H8.102a.75.75 0 0 0-.75.75v2.164a.75.75 0 1 0 1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.571 7.789a.75.75 0 0 1 1.06 0l7.363 7.362a.75.75 0 1 1-1.06 1.06L7.57 8.85a.75.75 0 0 1 0-1.061M15.147 9.07h-1.416a.75.75 0 0 1 0-1.5h2.166a.75.75 0 0 1 .75.75v2.164a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.427 7.79a.75.75 0 0 1 0 1.06l-7.362 7.362a.75.75 0 0 1-1.06-1.06l7.361-7.362a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossingDirectionsVerticalUpSquareOutline;
