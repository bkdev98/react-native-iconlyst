import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkPlusBold = ({
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
      d="M5.65 21.5a1.38 1.38 0 0 1-1.382-1.384V6.415C4.268 3.927 6.007 2.5 9.04 2.5h5.917c3.075 0 4.77 1.451 4.77 4.086l.005 13.526c0 .237-.062.472-.18.68-.18.321-.476.553-.832.652-.357.101-.73.054-1.052-.128l-5.643-3.186-5.697 3.193a1.4 1.4 0 0 1-.677.177m5.599-8.689a.75.75 0 0 0 1.5 0V11.22h1.591a.75.75 0 0 0 0-1.5h-1.591V8.129a.75.75 0 0 0-1.5 0V9.72H9.658a.75.75 0 0 0 0 1.5h1.591z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkPlusBold;
