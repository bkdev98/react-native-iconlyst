import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileSearchBold = ({
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
      d="M15.263 16.568a.75.75 0 0 1-1.061 0l-.89-.888c-1.23.762-2.965.58-4.012-.47a3.24 3.24 0 0 1-.954-2.302c0-.87.339-1.688.954-2.302 1.228-1.23 3.375-1.23 4.604 0 .615.614.954 1.432.954 2.302 0 .614-.17 1.202-.485 1.71l.89.889a.75.75 0 0 1 0 1.06M16.62 5.364h-2.652a1.66 1.66 0 0 1-1.313-.655l-.856-1.141a2.66 2.66 0 0 0-2.111-1.055H7.813c-3.424 0-5.088 1.907-5.088 5.828v7.313c0 3.652 2.185 5.833 5.845 5.833h7.296c3.652 0 5.833-2.181 5.833-5.83l.026-4.66c0-3.843-1.622-5.633-5.105-5.633"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.602 11.153c-.47 0-.91.182-1.242.514a1.74 1.74 0 0 0-.514 1.24c0 .47.183.91.514 1.243.663.664 1.82.664 2.484 0 .33-.332.514-.772.514-1.242s-.183-.91-.514-1.241a1.74 1.74 0 0 0-1.242-.514"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileSearchBold;
