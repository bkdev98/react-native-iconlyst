import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayDownLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.234 9.184c1.125 2.792 3.484 6.466 5.323 8.496q2.44 2.778 4.882 0c1.837-2.03 4.196-5.704 5.32-8.496.738-2.272-.23-3.58-2.789-3.992a43 43 0 0 0-4.972-.258 43 43 0 0 0-4.974.258c-2.567.398-3.51 1.722-2.79 3.992"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayDownLight;
