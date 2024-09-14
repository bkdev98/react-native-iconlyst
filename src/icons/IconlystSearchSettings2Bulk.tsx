import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSettings2Bulk = ({
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
      d="m20.67 10.2-3.1-5.36a3.3 3.3 0 0 0-2.84-1.65H8.46c-1.17 0-2.26.63-2.84 1.64l-3.1 5.36a3.31 3.31 0 0 0 0 3.28l3.1 5.36a3.27 3.27 0 0 0 2.84 1.65h4.048c.308 0 .442-.45.208-.65a5.93 5.93 0 0 1-2.07-4.723.32.32 0 0 0-.21-.315A3.16 3.16 0 0 1 8.42 11.84a3.173 3.173 0 0 1 5.547-2.116.33.33 0 0 0 .374.089 5.9 5.9 0 0 1 2.25-.443 5.9 5.9 0 0 1 3.784 1.363c.227.188.56.013.438-.256a3 3 0 0 0-.143-.277"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.132 20.014a.75.75 0 0 1-1.061 0l-1.3-1.299a3.96 3.96 0 0 1-2.135.631 3.996 3.996 0 0 1-3.993-3.99c0-2.2 1.79-3.99 3.993-3.99a3.997 3.997 0 0 1 3.993 3.99c0 .872-.29 1.672-.766 2.33l1.269 1.267a.75.75 0 0 1 0 1.061m-4.497-7.148a2.494 2.494 0 0 1 2.493 2.49 2.494 2.494 0 0 1-4.985 0 2.494 2.494 0 0 1 2.492-2.49"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSettings2Bulk;
