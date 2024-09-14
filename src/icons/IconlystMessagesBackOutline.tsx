import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBackOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.096 9.363a.75.75 0 0 1 0 1.06l-1.573 1.571h5.265a.75.75 0 0 1 0 1.5h-5.265l1.572 1.571a.75.75 0 0 1-1.06 1.061l-2.854-2.852a.75.75 0 0 1 0-1.06l2.854-2.852a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.25 22.504H5a1.625 1.625 0 0 1-1.346-2.524c.22-.332.5-.736.728-1.053a.22.22 0 0 0 .01-.238 17 17 0 0 1-1.006-1.878 9.835 9.835 0 0 1 1.97-11 9.766 9.766 0 1 1 6.9 16.7zm-.028-1.5h.028a8.25 8.25 0 0 0 6.317-2.954 8.4 8.4 0 0 0 .177-10.439 8.238 8.238 0 0 0-12.328-.747 8.34 8.34 0 0 0-1.654 9.348q.419.889.93 1.726a1.73 1.73 0 0 1-.086 1.85c-.219.308-.49.7-.7 1.018a.12.12 0 0 0-.008.134c.034.063.072.045.1.063h7.224"
    />
  </Svg>
);
export default IconlystMessagesBackOutline;
