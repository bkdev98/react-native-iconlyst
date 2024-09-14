import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerTriangleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.014 3a2.78 2.78 0 0 1 2.439 1.415l7.186 12.564c.503.879.5 1.928-.01 2.805a2.78 2.78 0 0 1-2.43 1.402H4.816a2.78 2.78 0 0 1-2.432-1.402 2.78 2.78 0 0 1-.01-2.805l7.2-12.566A2.78 2.78 0 0 1 12.014 3m-.001 1.5c-.476 0-.9.246-1.138.659L3.677 17.724a1.3 1.3 0 0 0 .005 1.308c.237.409.66.654 1.134.654h14.383c.472 0 .896-.245 1.133-.654.238-.409.24-.898.004-1.308L13.15 5.159a1.3 1.3 0 0 0-1.138-.659m-.007 10.999a1 1 0 1 1 0 2 1.003 1.003 0 0 1-1.005-1c0-.553.443-1 .995-1zm-.002-5.935a.75.75 0 0 1 .75.75v3.1a.75.75 0 0 1-1.5 0v-3.1a.75.75 0 0 1 .75-.75"
    />
  </Svg>
);
export default IconlystDangerTriangleOutline;
