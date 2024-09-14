import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageSortOutline = ({
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
      d="M3.81 3.897C4.795 2.841 6.196 2.25 7.852 2.25h8.434c1.66 0 3.061.59 4.045 1.648.978 1.05 1.486 2.5 1.486 4.128v4.054a.75.75 0 1 1-1.5 0v-1.839H3.82v5.73c0 1.318.409 2.38 1.085 3.107.67.72 1.658 1.17 2.947 1.17h1.75a.75.75 0 1 1 0 1.5h-1.75c-1.66 0-3.062-.592-4.045-1.648-.978-1.051-1.487-2.501-1.487-4.129V8.027c0-1.629.511-3.079 1.49-4.129m.01 4.844h16.497v-.715c0-1.318-.408-2.38-1.084-3.106-.67-.72-1.658-1.17-2.947-1.17H7.852c-1.284 0-2.273.45-2.944 1.17-.678.726-1.088 1.789-1.088 3.106zm1.788-2.192a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75H8.9a.75.75 0 1 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.683 7.09a.75.75 0 0 1 1.041 0l1.748 1.686a.75.75 0 1 1-1.042 1.08l-.476-.46v4.553a.75.75 0 0 1-1.5 0v-4.554l-.478.46a.75.75 0 1 1-1.041-1.08zm5.733.29a.75.75 0 0 1 .75.75v4.555l.477-.46a.75.75 0 1 1 1.041 1.08l-1.748 1.686a.75.75 0 0 1-1.041 0l-1.748-1.686a.75.75 0 0 1 1.042-1.08l.477.46V14.68a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageSortOutline;
