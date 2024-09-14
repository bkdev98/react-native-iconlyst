import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh2Bold = ({
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
      d="M20.39 7.425a1 1 0 0 0-1.311.531l-.511 1.21a8.04 8.04 0 0 0-7.484-5C6.626 4.166 3 7.792 3 12.25c0 4.457 3.626 8.083 8.084 8.083a8.1 8.1 0 0 0 6.663-3.493 1 1 0 1 0-1.646-1.137A6.091 6.091 0 0 1 5 12.25a6.09 6.09 0 0 1 6.084-6.084 6.05 6.05 0 0 1 5.815 4.266l-1.9-.803a1 1 0 0 0-.78 1.841l3.51 1.484a1 1 0 0 0 .134.056l.139.06a.998.998 0 0 0 1.311-.532l1.608-3.802a1 1 0 0 0-.531-1.311"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefresh2Bold;
