import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrapAiOutline = ({
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
      d="M12.34 5.048a.75.75 0 0 1 .81-.684c4.396.371 8.082 3.388 8.082 7.329 0 2.39-1.378 4.46-3.421 5.781.08 1.873-1.12 3.784-3.38 4.26a.75.75 0 0 1-.308-1.468c1.124-.237 1.832-.995 2.086-1.868-.85.446-1.732.76-3.123.76-1.072 0-1.94-.307-2.548-.854a2.66 2.66 0 0 1-.89-2.022c.02-1.487 1.238-2.857 3.182-2.857 1.424 0 2.574.382 3.42 1.037.525.408.916.908 1.175 1.454 1.453-1.092 2.307-2.604 2.307-4.223 0-2.895-2.792-5.504-6.708-5.834a.75.75 0 0 1-.685-.81m3.8 11.671a2.5 2.5 0 0 0-.81-1.071c-.537-.416-1.347-.723-2.5-.723-1.16 0-1.674.746-1.681 1.376-.004.323.119.642.392.888.274.246.757.469 1.545.469 1.362 0 2.006-.335 3.054-.939M4.25 9.736a.75.75 0 0 1 .558.901 4.6 4.6 0 0 0-.122 1.056c0 1.844 1.107 3.547 2.946 4.652a.75.75 0 0 1-.773 1.286c-2.18-1.31-3.673-3.45-3.673-5.938q.002-.717.162-1.398a.75.75 0 0 1 .901-.559"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.948 4.745a.75.75 0 0 1 .704.49l.097.265c.294.794.919 1.42 1.711 1.713l.265.098a.75.75 0 0 1 0 1.407l-.265.098a2.9 2.9 0 0 0-1.71 1.713l-.098.265a.75.75 0 0 1-1.407 0l-.098-.265a2.9 2.9 0 0 0-1.71-1.713l-.265-.098a.75.75 0 0 1 0-1.407l.264-.098A2.9 2.9 0 0 0 8.146 5.5l.099-.265a.75.75 0 0 1 .703-.49m-.88 3.27c.333.25.63.547.88.881.25-.334.547-.631.881-.882a4.4 4.4 0 0 1-.88-.881 4.4 4.4 0 0 1-.882.881M4.764 2.25a.75.75 0 0 1 .717.532c.11.359.39.639.747.748a.75.75 0 0 1 0 1.435c-.358.109-.638.389-.747.748a.75.75 0 0 1-1.435 0c-.11-.359-.39-.64-.747-.748a.75.75 0 0 1 0-1.435c.358-.109.638-.39.747-.748a.75.75 0 0 1 .718-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrapAiOutline;
