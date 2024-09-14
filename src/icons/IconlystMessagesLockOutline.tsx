import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesLockOutline = ({
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
      fill={props.color}
      d="M12.546 21.941H5.293a1.623 1.623 0 0 1-1.345-2.527c.221-.332.5-.736.728-1.052a.22.22 0 0 0 .01-.239q-.548-.914-1-1.879a9.835 9.835 0 0 1 1.97-11 9.766 9.766 0 1 1 6.9 16.7zm-2.22-1.5h2.22a8.24 8.24 0 0 0 6.316-2.953A8.4 8.4 0 0 0 19.04 7.05a8.24 8.24 0 0 0-12.328-.747 8.35 8.35 0 0 0-1.654 9.35q.417.886.928 1.724a1.73 1.73 0 0 1-.086 1.852c-.217.306-.49.7-.7 1.016a.125.125 0 0 0 .036.18.1.1 0 0 0 .061.017h5.032z"
    />
    <Path
      fill={props.color}
      d="M14.02 16.63h-2.963a2.226 2.226 0 0 1-2.221-2.225v-1.67a2.225 2.225 0 0 1 2.22-2.225h2.964a2.225 2.225 0 0 1 2.22 2.226v1.669a2.226 2.226 0 0 1-2.22 2.226m-2.963-4.62a.724.724 0 0 0-.721.726v1.669a.724.724 0 0 0 .72.726h2.964a.724.724 0 0 0 .72-.726v-1.67a.724.724 0 0 0-.72-.725z"
    />
    <Path
      fill={props.color}
      d="M14.306 12.04a.75.75 0 0 1-.75-.75v-1.1a1.02 1.02 0 0 0-2.038 0v1.092a.75.75 0 0 1-1.5 0v-1.099a2.519 2.519 0 1 1 5.038 0v1.106a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystMessagesLockOutline;
