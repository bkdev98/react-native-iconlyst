import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPictureInPictureBroken = ({
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
      d="M12.084 3H16.3c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.866c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.084 5.081 4.927 3 7.866 3h.628"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.156 17.297c-1.15 0-1.873-.815-1.873-1.968v-2.141c0-1.154.718-1.97 1.873-1.97h3.304c1.155 0 1.874.816 1.874 1.97v2.14c0 1.154-.719 1.969-1.874 1.969"
    />
  </Svg>
);
export default IconlystPictureInPictureBroken;
