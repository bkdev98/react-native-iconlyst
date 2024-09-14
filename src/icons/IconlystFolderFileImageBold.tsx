import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileImageBold = ({
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
      d="M17.186 15.185a.75.75 0 0 1-1.061-.02l-1.741-1.804-2.219 2.62c-.25.297-.618.47-1.006.475h-.02a1.34 1.34 0 0 1-1-.447L9.126 14.88 7.88 16.195a.747.747 0 0 1-1.059.028.75.75 0 0 1-.029-1.06l1.362-1.435c.252-.268.607-.42.975-.42h.016c.374.005.733.167.983.445l1.008 1.12 2.215-2.613a1.344 1.344 0 0 1 1.992-.065l1.863 1.929a.75.75 0 0 1-.02 1.06m-8.56-5.488a.94.94 0 0 1 .939.937.94.94 0 0 1-1.877 0 .94.94 0 0 1 .938-.937m7.769-4.333h-2.651a1.66 1.66 0 0 1-1.314-.658l-.856-1.138a2.65 2.65 0 0 0-2.111-1.055H7.588C4.165 2.513 2.5 4.419 2.5 8.34v7.313c0 3.652 2.185 5.833 5.845 5.833h7.296c3.652 0 5.833-2.181 5.833-5.83l.026-4.66c0-3.843-1.622-5.633-5.105-5.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileImageBold;
