import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondsSymbolsTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.502 3c-.68 0-1.36.286-1.837.86l-5.486 6.584a2.39 2.39 0 0 0-.006 3.051l5.486 6.638a2.38 2.38 0 0 0 1.843.867"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.502 3c.678 0 1.356.287 1.833.86l5.486 6.584c.736.883.738 2.165.006 3.051l-5.486 6.638a2.38 2.38 0 0 1-1.839.867"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDiamondsSymbolsTwoTone;
