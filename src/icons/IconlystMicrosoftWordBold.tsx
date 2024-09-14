import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftWordBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.865 10.359v1.1a.3.3 0 0 0 .3.3h7.41a.3.3 0 0 0 .3-.3v-1.88a.3.3 0 0 0-.3-.3h-7.46c-.197 0-.34.186-.308.38q.057.339.058.7M12.865 14.659q-.001.357-.056.686c-.033.196.11.384.309.384h7.457a.3.3 0 0 0 .3-.3v-1.87a.3.3 0 0 0-.3-.3h-7.41a.3.3 0 0 0-.3.3zM9.525 18.129h-2.48a.283.283 0 0 0-.289.3c.126 1.672 1.298 3 3.079 3h7.95c1.82 0 3.09-1.32 3.09-3.21v-.69a.3.3 0 0 0-.3-.3h-8.586a.32.32 0 0 0-.214.086c-.572.525-1.348.814-2.25.814M17.785 3.589h-7.95c-1.78 0-2.954 1.328-3.079 3-.012.165.123.3.289.3h2.48c.902 0 1.67.298 2.241.807a.32.32 0 0 0 .21.083h8.599a.3.3 0 0 0 .3-.3v-.68c0-1.89-1.27-3.21-3.09-3.21M8.685 14.929h-.04a.74.74 0 0 1-.69-.46l-.71-1.68-.71 1.68c-.12.3-.4.48-.74.46a.75.75 0 0 1-.67-.54l-.94-3.34c-.12-.4.11-.81.51-.93.4-.11.82.12.93.52l.36 1.27.57-1.36c.12-.27.4-.41.69-.41s.57.14.69.41l.57 1.36.36-1.27c.11-.4.52-.63.93-.52.39.12.62.53.51.93l-.94 3.34c-.09.31-.36.52-.68.54m2.68-.27v-4.3c0-1.23-.69-1.97-1.84-1.97h-4.56c-1.14 0-1.84.76-1.84 1.97v4.3c0 1.22.7 1.97 1.84 1.97h4.56c1.14 0 1.84-.75 1.84-1.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftWordBold;
