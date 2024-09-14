import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification3Boldsharp = ({
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
      fillRule="evenodd"
      d="M12.25 20.599c-1.24 0-2.25-.94-2.39-2.14h4.78a2.413 2.413 0 0 1-2.39 2.14m6.69-7.19v-4.37c0-.17-.01-.34-.02-.5-.39.12-.81.19-1.24.19a4.03 4.03 0 0 1-4.03-4.03c0-.75.2-1.45.57-2.05-.62-.2-1.28-.3-1.97-.3-3.69 0-6.69 3-6.69 6.69v4.37l-1.61 1.64v3.41h4.41c.15 2.03 1.82 3.64 3.89 3.64s3.75-1.61 3.89-3.64h4.41v-3.41z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.68 7.229a2.53 2.53 0 0 0 2.53-2.53c0-1.39-1.13-2.52-2.53-2.52-.86 0-1.62.43-2.08 1.08-.28.41-.45.9-.45 1.44 0 1.4 1.14 2.53 2.53 2.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotification3Boldsharp;
