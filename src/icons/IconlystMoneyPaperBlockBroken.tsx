import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperBlockBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.177V8.175c0-1.965-1.229-3.355-3.188-3.355H12M12.412 18.94H6.189C4.223 18.94 3 17.55 3 15.584V8.175C3 6.21 4.223 4.82 6.188 4.82H8.5M6.213 8.324h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 9.588a2.29 2.29 0 0 1 2.289 2.291 2.29 2.29 0 0 1-2.289 2.292 2.29 2.29 0 0 1-2.287-2.292"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.375 16.517a2.79 2.79 0 0 1 2.787-2.79 2.79 2.79 0 0 1 2.787 2.79 2.79 2.79 0 0 1-2.787 2.791 2.79 2.79 0 0 1-2.787-2.791"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.246 14.598 3.833 3.837"
    />
  </Svg>
);
export default IconlystMoneyPaperBlockBroken;
