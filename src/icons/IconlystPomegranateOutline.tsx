import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPomegranateOutline = ({
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
      fill={props.color}
      d="M12.005 21.746c-.67 0-1.33-.14-1.96-.41l-4.03-1.78a4.83 4.83 0 0 1-2.88-4.42v-3.87c0-1.89 1.11-3.61 2.82-4.4l2.85-1.3-.57-2.38a.754.754 0 0 1 .91-.91l2.89.71 2.82-.71c.25-.06.52 0 .71.19s.26.45.2.71l-.57 2.38 2.85 1.3c1.72.78 2.82 2.51 2.82 4.4v3.87c0 1.91-1.13 3.65-2.88 4.42l-4.03 1.78c-.62.28-1.29.41-1.96.41zm-5.41-13.52a3.35 3.35 0 0 0-1.95 3.03v3.87c0 1.32.78 2.52 1.98 3.05l4.03 1.78c.86.38 1.84.38 2.7 0l4.03-1.78a3.32 3.32 0 0 0 1.98-3.05v-3.87c0-1.3-.76-2.49-1.95-3.03l-3.42-1.56a.755.755 0 0 1-.42-.86l.43-1.78-1.79.45q-.18.045-.36 0l-1.88-.46.43 1.79c.08.35-.09.71-.42.86l-3.42 1.56z"
    />
    <Path
      fill={props.color}
      d="M15.785 17.376c-.31 0-.6-.2-.71-.51-.13-.39.08-.82.47-.95.69-.24 1.16-.89 1.16-1.62 0-.41.34-.75.75-.75s.75.34.75.75c0 1.38-.87 2.6-2.18 3.04-.08.03-.16.04-.24.04"
    />
  </Svg>
);
export default IconlystPomegranateOutline;
