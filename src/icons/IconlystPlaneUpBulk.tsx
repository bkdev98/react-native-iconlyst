import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneUpBulk = ({
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
      d="M12.023 2.5H12c-1.556 0-2.347 1.568-2.425 3.023-.058 1.09-.04 2.209-.026 3.196.002.18.001.183-.159.257-1.377.631-2.74 1.283-4.105 1.945-.875.429-1.36 1.004-1.485 1.757-.07.421-.085.851-.1 1.268v.032l-.001.012q-.008.274-.024.561a.5.5 0 0 0 .495.529l5.363.046.214 2.316-1.669 1.372a.5.5 0 0 0-.182.386V21a.501.501 0 0 0 .621.485l3.483-.87.023.006z"
    />
    <Path
      fill={props.color}
      d="M12.023 2.5h.023c1.556 0 2.347 1.568 2.425 3.023.058 1.09.04 2.209.026 3.196-.002.18-.001.183.159.257 1.377.631 2.74 1.283 4.105 1.945.875.429 1.36 1.004 1.485 1.757.07.421.085.851.1 1.268v.032l.001.012q.008.274.024.561a.5.5 0 0 1-.495.529l-5.363.046-.214 2.316 1.669 1.372a.5.5 0 0 1 .182.386V21a.501.501 0 0 1-.621.485l-3.483-.87-.023.006z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneUpBulk;
