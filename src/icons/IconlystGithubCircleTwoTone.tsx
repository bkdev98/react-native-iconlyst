import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.68 20.593c.157-1.572-.733-3.218-1.14-3.637 1.895-.212 3.886-.93 3.886-4.223a3.28 3.28 0 0 0-.905-2.262 3.07 3.07 0 0 0-.055-2.275s-.712-.211-2.359.893a8.05 8.05 0 0 0-4.223 0c-1.647-1.104-2.36-.893-2.36-.893a3.06 3.06 0 0 0-.053 2.275 3.28 3.28 0 0 0-.905 2.28c0 3.27 1.991 3.979 3.885 4.214-.406.419-1.298 2.053-1.142 3.625"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGithubCircleTwoTone;
