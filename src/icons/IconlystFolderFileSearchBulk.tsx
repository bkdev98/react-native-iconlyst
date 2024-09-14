import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileSearchBulk = ({
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
      d="M16.62 5.364h-2.652a1.66 1.66 0 0 1-1.313-.657l-.856-1.14a2.66 2.66 0 0 0-2.111-1.054H7.813c-3.424 0-5.088 1.907-5.088 5.829v7.312c0 3.652 2.185 5.833 5.845 5.833h7.296c3.652 0 5.833-2.181 5.833-5.83l.026-4.658c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.732 16.788a.75.75 0 0 0 .53-1.28l-.89-.889a3.23 3.23 0 0 0 .486-1.71c0-.87-.34-1.689-.954-2.303-1.23-1.23-3.376-1.23-4.604 0a3.23 3.23 0 0 0-.954 2.302c0 .87.339 1.687.954 2.303 1.047 1.05 2.782 1.231 4.013.47l.889.887c.146.146.338.22.53.22m-4.372-5.12a1.74 1.74 0 0 1 1.242-.515c.469 0 .91.182 1.242.514.33.331.514.772.514 1.241s-.183.91-.514 1.242c-.663.664-1.821.664-2.484 0a1.75 1.75 0 0 1-.514-1.242c0-.469.183-.91.514-1.24"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileSearchBulk;
