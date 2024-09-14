import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageBookmarkOutline = ({
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
      d="M4.194 3.868C5.16 2.83 6.538 2.25 8.164 2.25h8.26c1.628 0 3.006.58 3.972 1.618.961 1.033 1.46 2.457 1.46 4.054v3.97a.75.75 0 0 1-1.5 0v-1.785H4.23v5.597c0 1.287.4 2.324 1.058 3.031.653.702 1.617 1.14 2.875 1.14h1.714a.75.75 0 0 1 0 1.5H8.163c-1.629 0-3.006-.58-3.973-1.618-.96-1.032-1.46-2.456-1.46-4.053V7.922c0-1.598.502-3.022 1.464-4.054m.036 4.739h16.126v-.685c0-1.287-.399-2.324-1.058-3.032-.653-.701-1.616-1.14-2.874-1.14h-8.26c-1.254 0-2.218.439-2.873 1.14-.66.709-1.06 1.746-1.06 3.032zm1.72-2.131a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5H6.7a.75.75 0 0 1-.75-.75m2.434 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.436 0a.75.75 0 0 1 .75-.75h.054a.75.75 0 1 1 0 1.5h-.054a.75.75 0 0 1-.75-.75m2.955 7.023c.474-.34 1.066-.444 1.616-.444h2.285c.57 0 1.172.113 1.646.476.509.39.753.976.753 1.659l.002 5.467c0 .19-.05.372-.138.532l-.004.007c-.297.521-.96.707-1.484.412h-.003l-1.905-1.077-1.926 1.08h-.003a1.091 1.091 0 0 1-1.623-.953v-5.534c0-.687.27-1.257.784-1.625m.874 1.22c-.075.053-.158.143-.158.405v4.837l1.686-.945a.75.75 0 0 1 .736.001l1.664.94-.002-4.767c0-.307-.094-.413-.165-.468-.107-.082-.33-.167-.734-.167H15.39c-.392 0-.626.08-.742.163"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageBookmarkOutline;
