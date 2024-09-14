import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentRemoveBold = ({
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
      d="M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.279-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.57c0 1.077.879 1.965 1.946 1.965"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.12 14.585a.75.75 0 1 1-1.06 1.06L12 14.586l-1.06 1.062a.747.747 0 0 1-1.06 0 .75.75 0 0 1 0-1.061l1.06-1.06-1.06-1.061a.75.75 0 0 1 1.06-1.061l1.06 1.06 1.06-1.06a.75.75 0 1 1 1.061 1.062l-1.06 1.06zm5.73-5.49h-2.963c-1.765-.01-3.223-1.471-3.223-3.254V2.703a.445.445 0 0 0-.443-.45H8.068c-2.403 0-4.352 1.98-4.352 4.397v10.506c0 2.534 2.046 4.59 4.554 4.59h7.672c2.402 0 4.342-1.96 4.342-4.376V9.535a.435.435 0 0 0-.434-.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentRemoveBold;
