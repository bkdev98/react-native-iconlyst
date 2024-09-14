import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInternetExplorerCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.806 9.081c-1.514-.183-3.01.992-3.184 2.501a.75.75 0 0 1-1.49-.172c.27-2.34 2.52-4.1 4.854-3.818 2.59.314 3.937 2.73 3.743 5.004a.75.75 0 0 1-.747.686H9.733a.75.75 0 0 1 0-1.5h4.498c-.137-1.396-1.061-2.535-2.425-2.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.44 10.45a.75.75 0 0 1-.173 1.047c-.524.375-.838.952-.854 1.53v.002c-.022.74.457 1.455 1.247 1.756.753.289 1.73.159 2.525-.32a.75.75 0 0 1 .774 1.285c-1.11.669-2.57.92-3.835.436-1.331-.508-2.253-1.768-2.21-3.2v-.002l.75.023-.75-.021c.03-1.086.606-2.084 1.48-2.71a.75.75 0 0 1 1.047.174"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInternetExplorerCircleOutline;
