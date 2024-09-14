import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneeLeftBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.356 15.693-1.458-1.46a.5.5 0 0 0-.403-.144L17 14.333l-1.77-2.128 4.349-4.418a.504.504 0 0 0-.023-.723q-.236-.214-.46-.425c-.38-.358-.74-.696-1.156-.99-.687-.49-1.547-.56-2.553-.206a176 176 0 0 0-4.891 1.744c-.226.082-.26.068-.417-.1l-.14-.144c-.79-.808-1.605-1.643-2.464-2.42-1.217-1.092-3.083-1.71-4.306-.48-1.22 1.223-.604 3.09.486 4.309.836.92 1.724 1.79 2.564 2.605.166.159.176.2.096.413a185 185 0 0 0-1.746 4.892c-.356 1.022-.29 1.857.206 2.556.299.418.656.797 1 1.165q.208.22.415.448a.5.5 0 0 0 .357.165.54.54 0 0 0 .366-.144 3489 3489 0 0 1 4.422-4.353l2.139 1.762-.26 2.504a.5.5 0 0 0 .145.405l1.457 1.46a.502.502 0 0 0 .783-.096l2.123-3.533 3.537-2.126a.502.502 0 0 0 .097-.782"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneeLeftBold;
