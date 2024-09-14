import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentCodeOutline = ({
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
      d="M11.695 21.75H8.271a4.5 4.5 0 0 1-4.4-4.6V6.657A4.48 4.48 0 0 1 8.39 2.25h5.648a2.81 2.81 0 0 1 2.02.861l3.793 3.95c.501.52.78 1.216.78 1.94v8.164a4.545 4.545 0 0 1-4.38 4.585zm-3.32-18a3.013 3.013 0 0 0-3 2.925v10.49a3 3 0 0 0 2.936 3.084h7.91a3.046 3.046 0 0 0 2.907-3.08V9a1.3 1.3 0 0 0-.363-.9l-3.79-3.95a1.3 1.3 0 0 0-.938-.4z"
    />
    <Path
      fill={props.color}
      d="M19.813 9.266h-2.739a3.315 3.315 0 0 1-3.3-3.311V3.063a.75.75 0 1 1 1.5 0v2.892a1.814 1.814 0 0 0 1.806 1.81h2.737a.75.75 0 1 1 0 1.5zM13.182 17.301a.75.75 0 0 1-.53-1.28l1.64-1.64-1.607-1.607a.753.753 0 1 1 1.066-1.065l2.137 2.138a.75.75 0 0 1 0 1.06l-2.17 2.17a.75.75 0 0 1-.536.224M10.914 15.283a.75.75 0 0 1-.531-.22L8.213 12.9a.75.75 0 0 1 0-1.06l2.137-2.14a.75.75 0 0 1 1.061 1.06l-1.607 1.605L11.444 14a.75.75 0 0 1-.53 1.28z"
    />
  </Svg>
);
export default IconlystDocumentCodeOutline;
