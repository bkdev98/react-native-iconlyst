import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileFontLight = ({
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
      d="M15.866 20.987c3.355 0 5.332-1.978 5.332-5.332l.027-4.656c0-3.423-1.242-5.135-4.606-5.135h-2.653a2.15 2.15 0 0 1-1.712-.856l-.856-1.138a2.14 2.14 0 0 0-1.71-.856H7.811c-3.355 0-4.587 1.977-4.587 5.328v7.313c0 3.354 1.98 5.332 5.344 5.332z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.632 16.04h-2.813m1.405-5.626v5.626m-2.812-4.22v-.937c0-.258.21-.469.47-.469h4.687c.26 0 .47.21.47.47v.937"
    />
  </Svg>
);
export default IconlystFolderFileFontLight;
