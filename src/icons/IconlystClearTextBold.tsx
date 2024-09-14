import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClearTextBold = ({
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
      d="M16.792 13.53a.75.75 0 1 1-1.061 1.062l-1.525-1.525-1.525 1.525a.749.749 0 1 1-1.06-1.061l1.525-1.524-1.525-1.526a.749.749 0 1 1 1.06-1.06l1.525 1.524L15.73 9.42a.75.75 0 0 1 1.06 1.06l-1.524 1.526zm1.536-8.82H9.202c-.747 0-1.453.318-1.936.872L3.135 10.31a2.57 2.57 0 0 0-.001 3.379l4.132 4.73a2.57 2.57 0 0 0 1.936.87h9.126a3.174 3.174 0 0 0 3.17-3.17V7.88a3.174 3.174 0 0 0-3.17-3.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClearTextBold;
