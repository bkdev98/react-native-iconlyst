import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangeTempratureOutline = ({
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
      d="M10.515 5.687a2.483 2.483 0 1 0 0 3.512.75.75 0 0 1 1.06 1.06 3.983 3.983 0 1 1 0-5.632.75.75 0 1 1-1.06 1.06M2.864 3.181a.946.946 0 1 1 1.891 0 .946.946 0 0 1-1.89 0M14.225 13.3a.946.946 0 1 1 1.89 0 .946.946 0 0 1-1.89 0M17.264 14.634c0-.69.56-1.25 1.25-1.25h3.1a.75.75 0 0 1 0 1.5h-2.85v6.13a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.264 17.865a.75.75 0 0 1 .75-.75h3.6a.75.75 0 0 1 0 1.5h-3.6a.75.75 0 0 1-.75-.75M21.354 6.919a.75.75 0 0 1 .135 1.052l-1.175 1.52a.75.75 0 0 1-1.052.136l-1.52-1.174a.75.75 0 1 1 .916-1.187l.927.715.717-.927a.75.75 0 0 1 1.052-.135"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.977 3.413a.75.75 0 0 1 .75-.75c1.72 0 3.131.578 4.13 1.699.983 1.102 1.493 2.647 1.604 4.451a.75.75 0 0 1-1.497.093c-.098-1.597-.54-2.776-1.226-3.546-.67-.752-1.648-1.197-3.011-1.197a.75.75 0 0 1-.75-.75M4.915 14.508a.75.75 0 0 1 1.052-.135l1.52 1.174a.75.75 0 1 1-.916 1.187l-.927-.715-.716.927a.75.75 0 0 1-1.188-.917z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.47 14.392a.75.75 0 0 1 .795.702c.099 1.596.54 2.775 1.227 3.546.67.752 1.647 1.197 3.01 1.197a.75.75 0 0 1 0 1.5c-1.72 0-3.131-.578-4.13-1.7-.983-1.102-1.493-2.646-1.604-4.45a.75.75 0 0 1 .702-.795"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChangeTempratureOutline;
