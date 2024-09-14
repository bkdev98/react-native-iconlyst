import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBinaryTreeLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M8.884 20.623H5.8a1.8 1.8 0 0 1-1.8-1.8v-.904a1.8 1.8 0 0 1 1.8-1.8h3.084a1.8 1.8 0 0 1 1.8 1.8v.904a1.8 1.8 0 0 1-1.8 1.8ZM19.2 20.623h-3.084a1.8 1.8 0 0 1-1.8-1.8v-.904a1.8 1.8 0 0 1 1.8-1.8H19.2a1.8 1.8 0 0 1 1.8 1.8v.904a1.8 1.8 0 0 1-1.8 1.8ZM14.115 8.119H11.03a1.8 1.8 0 0 1-1.8-1.8v-.905a1.8 1.8 0 0 1 1.8-1.8h3.084a1.8 1.8 0 0 1 1.8 1.8v.905a1.8 1.8 0 0 1-1.8 1.8Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.5 11.166V8.12m0 3.047L7.217 16.12m5.283-4.953 5.283 4.953"
    />
  </Svg>
);
export default IconlystBinaryTreeLight;
