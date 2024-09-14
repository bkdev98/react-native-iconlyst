import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondsSymbolsLight = ({
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
      d="M10.165 3.86a2.39 2.39 0 0 1 3.67 0l5.486 6.584c.736.883.739 2.165.006 3.051l-5.485 6.638a2.39 2.39 0 0 1-3.683 0l-5.486-6.638a2.39 2.39 0 0 1 .006-3.051z"
    />
  </Svg>
);
export default IconlystDiamondsSymbolsLight;
