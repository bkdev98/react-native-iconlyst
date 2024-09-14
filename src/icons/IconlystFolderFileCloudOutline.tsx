import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileCloudOutline = ({
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
      d="M8.819 21.735c-3.76 0-6.094-2.331-6.094-6.083V8.34c0-4.034 1.8-6.078 5.337-6.078h1.875a2.9 2.9 0 0 1 2.31 1.155l.857 1.138a1.4 1.4 0 0 0 1.113.557h2.652c3.653 0 5.356 1.87 5.356 5.886l-.027 1.852a.75.75 0 0 1-.75.74h-.011a.75.75 0 0 1-.74-.761l.028-1.842c0-3.186-1.045-4.375-3.856-4.375h-2.653a2.91 2.91 0 0 1-2.311-1.154l-.856-1.14a1.4 1.4 0 0 0-1.112-.556H8.062c-2.69 0-3.837 1.369-3.837 4.578v7.312c0 2.955 1.63 4.583 4.594 4.583a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M19.257 21.736h-5.183a3.2 3.2 0 0 1-1.163-.235 2.94 2.94 0 0 1-1.757-2.7 2.84 2.84 0 0 1 2.252-2.865 3.328 3.328 0 0 1 6.523 0 2.83 2.83 0 0 1 2.25 2.869 2.95 2.95 0 0 1-1.728 2.683 3.2 3.2 0 0 1-1.194.248m-2.59-6.96a1.883 1.883 0 0 0-1.841 1.842.75.75 0 0 1-.743.75 1.358 1.358 0 0 0-1.43 1.445 1.43 1.43 0 0 0 .85 1.31c.182.07.375.108.57.113h5.184c.207-.004.413-.046.606-.124a1.44 1.44 0 0 0 .817-1.3 1.342 1.342 0 0 0-1.428-1.441.75.75 0 0 1-.743-.75 1.88 1.88 0 0 0-1.841-1.844z"
    />
  </Svg>
);
export default IconlystFolderFileCloudOutline;
