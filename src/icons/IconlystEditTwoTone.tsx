import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditTwoTone = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M13.7 19.898h6.377" opacity={0.4} />
      <Path d="M12.855 4.956c.737-.94 1.928-.89 2.868-.153l1.39 1.09c.94.737 1.273 1.88.536 2.82L9.359 19.29a1.48 1.48 0 0 1-1.15.568l-3.196.04-.724-3.114c-.102-.437 0-.897.277-1.252z" />
      <Path d="m11.303 6.936 4.794 3.758" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystEditTwoTone;
