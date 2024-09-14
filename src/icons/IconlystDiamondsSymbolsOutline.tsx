import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondsSymbolsOutline = ({
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
      d="M9.839 3.38a3.14 3.14 0 0 1 4.823 0l5.486 6.584a3.14 3.14 0 0 1 .008 4.009L14.67 20.61a3.14 3.14 0 0 1-4.84 0l-5.486-6.638a3.14 3.14 0 0 1 .008-4.01zm3.67.96a1.64 1.64 0 0 0-2.518 0l-5.486 6.584a1.64 1.64 0 0 0-.004 2.093l5.486 6.638a1.64 1.64 0 0 0 2.527 0l5.485-6.638c.503-.608.5-1.487-.004-2.093z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamondsSymbolsOutline;
