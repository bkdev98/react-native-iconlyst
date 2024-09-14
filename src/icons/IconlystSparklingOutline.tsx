import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSparklingOutline = ({
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
      d="M15.838 5.546a.75.75 0 0 0-.713.52 8.24 8.24 0 0 1-5.294 5.293.75.75 0 0 0 0 1.427 8.23 8.23 0 0 1 5.294 5.295.75.75 0 0 0 1.427 0 8.23 8.23 0 0 1 5.294-5.295.75.75 0 0 0 0-1.427 8.24 8.24 0 0 1-5.294-5.294.75.75 0 0 0-.714-.519m0 2.64a9.74 9.74 0 0 0 3.887 3.886 9.74 9.74 0 0 0-3.887 3.887 9.74 9.74 0 0 0-3.886-3.887 9.74 9.74 0 0 0 3.886-3.886M7.468 2.804a.75.75 0 0 0-.713.518 2.38 2.38 0 0 1-1.533 1.533.75.75 0 0 0 0 1.427 2.38 2.38 0 0 1 1.533 1.533.75.75 0 0 0 1.427 0 2.38 2.38 0 0 1 1.533-1.533.75.75 0 0 0 0-1.427 2.38 2.38 0 0 1-1.533-1.533.75.75 0 0 0-.714-.518m0 2.273q.225.268.492.492a4 4 0 0 0-.492.492 4 4 0 0 0-.492-.492q.269-.225.492-.492M6.604 13.717a.75.75 0 0 0-.714.519 3.9 3.9 0 0 1-2.507 2.507.75.75 0 0 0 0 1.427 3.9 3.9 0 0 1 2.507 2.507.75.75 0 0 0 1.427 0 3.9 3.9 0 0 1 2.507-2.507.75.75 0 0 0 0-1.427 3.9 3.9 0 0 1-2.507-2.507.75.75 0 0 0-.713-.519m0 2.414c.36.515.81.964 1.325 1.325a5.4 5.4 0 0 0-1.325 1.326 5.4 5.4 0 0 0-1.326-1.326c.515-.36.964-.81 1.326-1.325"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSparklingOutline;
