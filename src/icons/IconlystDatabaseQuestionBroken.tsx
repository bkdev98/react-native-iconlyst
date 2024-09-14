import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseQuestionBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.125 18.555c-.01-.795.714-1.133 1.252-1.44.656-.362 1.1-.938 1.1-1.738a2.13 2.13 0 0 0-2.134-2.135c-1.184 0-2.134.95-2.134 2.135M17.125 20.709v.033M4.428 15.422v1.897s0 2.908 7.344 2.908M19.082 10.19V5.691M4.428 5.691v5.814s0 2.907 7.344 2.907"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.755 2.783c-4.047 0-7.327 1.324-7.327 2.956s3.28 2.956 7.327 2.956 7.327-1.324 7.327-2.956c0-1.154-1.64-2.154-4.031-2.64"
    />
  </Svg>
);
export default IconlystDatabaseQuestionBroken;
