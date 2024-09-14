import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatQuoteBroken = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.334 19.068 1.422 1.426c.578.58 1.513.58 2.09 0l1.422-1.426a2.15 2.15 0 0 1 1.526-.634h1.068a3.946 3.946 0 0 0 3.939-3.953V7.542a3.945 3.945 0 0 0-3.939-3.952H7.74A3.946 3.946 0 0 0 3.8 7.542v6.94a3.947 3.947 0 0 0 3.94 3.952"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.99 8.396a5.1 5.1 0 0 0-1.927 2.784c-.211.778-.215 1.67.25 2.33.443.632 1.3.94 2.042.732 1.356-.376 1.796-2.105.88-3.14a2 2 0 0 0-1.384-.66M15.95 8.396a5.1 5.1 0 0 0-1.926 2.784c-.211.778-.215 1.67.249 2.33.444.632 1.3.94 2.043.732 1.356-.376 1.796-2.105.88-3.14a2 2 0 0 0-1.384-.66"
    />
  </Svg>
);
export default IconlystChatQuoteBroken;
