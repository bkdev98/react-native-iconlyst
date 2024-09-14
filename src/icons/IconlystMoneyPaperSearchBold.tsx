import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperSearchBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.126 10.213a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.126 14.793a3.04 3.04 0 0 1-3.038-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m-4.382-5.84H5.34a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5m12.053 2.628c.49 0 .962.075 1.407.214.204.064.423-.082.423-.297V8.053c0-2.303-1.482-3.85-3.689-3.85H5.314c-2.206 0-3.687 1.547-3.687 3.85v7.4c0 2.303 1.482 3.85 3.688 3.85h9.143c.251 0 .397-.295.266-.509a4.66 4.66 0 0 1-.696-2.442 4.776 4.776 0 0 1 4.769-4.77"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.874 17.43c-.294.285-.677.44-1.077.44a1.52 1.52 0 0 1 0-3.04c.838 0 1.52.683 1.52 1.522 0 .512-.24.868-.443 1.079m2.277 1.21-.755-.75a3.024 3.024 0 0 0-2.599-4.559 3.024 3.024 0 0 0-3.019 3.02 3.023 3.023 0 0 0 4.56 2.6l.757.753a.75.75 0 1 0 1.056-1.064"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperSearchBold;
