import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookSquareBroken = ({
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
      d="M12.249 21H8.032c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.25 5.081 5.093 3 8.032 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.507"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.95 15.083c1.15.082 2.15.552 2.74.894.348.202.774.202 1.123 0 .59-.342 1.589-.812 2.738-.894.588-.043 1.052-.513 1.052-1.103v-5c0-.663-.58-1.172-1.24-1.1-1.07.117-1.993.554-2.55.877a1.12 1.12 0 0 1-1.124 0c-.557-.323-1.48-.76-2.55-.877a1.113 1.113 0 0 0-1.24 1.1v5c0 .59.464 1.06 1.051 1.103M12.25 9.041v7.06"
    />
  </Svg>
);
export default IconlystBookSquareBroken;
