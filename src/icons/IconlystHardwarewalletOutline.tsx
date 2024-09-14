import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHardwarewalletOutline = ({
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
      fillRule="evenodd"
      d="M9.477 6.441c.74-.74 1.938-.74 2.677 0l5.656 5.656c.739.739.739 1.937 0 2.676l-5.252 5.252a5.892 5.892 0 1 1-8.332-8.332zm1.616 1.06a.393.393 0 0 0-.555 0l-5.252 5.253a4.392 4.392 0 1 0 6.211 6.21l5.252-5.251a.393.393 0 0 0 0-.555zM17.405 5.227a.75.75 0 0 1 0 1.061l-.404.404a.75.75 0 1 1-1.06-1.06l.403-.405a.75.75 0 0 1 1.061 0m1.616 1.616a.75.75 0 0 1 0 1.061l-.404.404a.75.75 0 0 1-1.06-1.06l.403-.405a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.153 3.865a.393.393 0 0 0-.555 0l-4.04 4.04a.75.75 0 0 1-1.061-1.06l4.04-4.04c.739-.74 1.937-.74 2.676 0l3.232 3.231c.74.74.74 1.938 0 2.677l-4.04 4.04a.75.75 0 0 1-1.06-1.061l4.04-4.04a.393.393 0 0 0 0-.555zM9.073 15.177A.964.964 0 1 0 7.71 16.54a.964.964 0 0 0 1.363-1.363m-2.424-1.06a2.464 2.464 0 1 1 3.485 3.484 2.464 2.464 0 0 1-3.485-3.485"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHardwarewalletOutline;
