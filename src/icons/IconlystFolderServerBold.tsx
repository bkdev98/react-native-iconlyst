import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderServerBold = ({
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
      fillRule="evenodd"
      d="M12.1 20.125c-.386 0-.75-.364-.75-.75s.364-.75.75-.75.75.364.75.75-.364.75-.75.75m2.6-4.35c2.776 0 4.5-1.724 4.5-4.5v-2.6c0-2.934-1.239-4.3-3.9-4.3h-2c-.375 0-.712-.149-.9-.4l-.6-.8c-.376-.501-1.011-.8-1.7-.8H8.7c-2.624 0-3.9 1.439-3.9 4.4v4.5c0 2.776 1.724 4.5 4.5 4.5h2.05v1.493a2.3 2.3 0 0 0-1.357 1.357H6.3a.75.75 0 0 0 0 1.5h3.693c.318.862 1.15 1.5 2.107 1.5s1.789-.638 2.107-1.5H17.9a.75.75 0 0 0 0-1.5h-3.693a2.3 2.3 0 0 0-1.357-1.357v-1.493z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderServerBold;
