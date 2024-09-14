import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillTimeTwoTone = ({
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
      d="m10.721 21-2.174-.889a1.82 1.82 0 0 0-1.467.043l-.77.369a1.22 1.22 0 0 1-1.748-1.102l.01-12.438C4.572 4.523 5.94 3 8.395 3h7.408c2.462 0 3.8 1.524 3.8 3.983v4.291"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.19 9.008H9.22m2.006 3.86H9.221M16.724 21a3.717 3.717 0 1 0-.001-7.434 3.717 3.717 0 0 0 0 7.434"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.877 18.25-1.176-.702v-1.51"
    />
  </Svg>
);
export default IconlystReceiptBillTimeTwoTone;
