import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileWarningBold = ({
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
      d="M12.228 16.752c-.414 0-.75-.302-.75-.716v-.067a.75.75 0 0 1 1.5 0c0 .414-.336.783-.75.783m-.755-6.538a.75.75 0 0 1 1.5 0v3.013a.75.75 0 0 1-1.5 0zm5.147-4.85h-2.652a1.66 1.66 0 0 1-1.313-.655l-.856-1.141a2.66 2.66 0 0 0-2.111-1.054H7.813c-3.424 0-5.088 1.906-5.088 5.828v7.312c0 3.653 2.185 5.833 5.845 5.833h7.296c3.653 0 5.833-2.18 5.833-5.83l.026-4.66c0-3.843-1.622-5.633-5.105-5.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileWarningBold;
