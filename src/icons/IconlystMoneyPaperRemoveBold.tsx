import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRemoveBold = ({
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
      d="M11.721 14.639a3.04 3.04 0 0 1-3.038-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04M7.34 8.799H5.936a.75.75 0 0 1 0-1.5H7.34a.75.75 0 0 1 0 1.5m13.234 3.106q.162 0 .32.009a.31.31 0 0 0 .33-.306V7.9c0-2.303-1.483-3.851-3.689-3.851H5.91c-2.206 0-3.688 1.548-3.688 3.85v7.4c0 2.303 1.483 3.85 3.69 3.85h7.286a.31.31 0 0 0 .305-.31q.001-.18.014-.36a7.074 7.074 0 0 1 7.056-6.574"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.721 10.059a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08M20.18 17.417l1.378-1.38a.749.749 0 1 0-1.061-1.06l-1.376 1.378-1.378-1.378a.75.75 0 0 0-1.061 1.06l1.379 1.38-1.38 1.38a.749.749 0 1 0 1.061 1.06l1.378-1.378 1.377 1.378a.746.746 0 0 0 1.06 0 .75.75 0 0 0 .002-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperRemoveBold;
