import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillTimeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.353 11.274v-4.29c0-2.46-1.338-3.984-3.8-3.984H8.145C5.69 3 4.322 4.524 4.322 6.983l-.002 3.11M10.471 20.999l-2.174-.888a1.82 1.82 0 0 0-1.467.042l-.77.37a1.22 1.22 0 0 1-1.748-1.103l.005-6.219M13.94 9.008H8.97m2.006 3.86H8.971M12.758 17.283a3.717 3.717 0 1 0 1.439-2.936"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.627 18.25-1.176-.702v-1.51"
    />
  </Svg>
);
export default IconlystReceiptBillTimeBroken;
